# Database credentials
$DB_HOST = "localhost"
$DB_PORT = "5432"
$DB_NAME = "synergy_prod"
$MIGRATIONS_DIR = ".\migrations"

# Function to check if the database exists
Function Check-DbExists {
  $query = "SELECT 1 FROM pg_database WHERE datname='$DB_NAME'"
  psql -h $DB_HOST -p $DB_PORT -d postgres -tAc $query
}

# Optionally drop the database if it exists (Uncomment to enable)
Write-Host "Checking if database needs to be dropped..."
$DB_EXISTS = Check-DbExists
if (-not [string]::IsNullOrEmpty($DB_EXISTS)) {
  Write-Host "Database $DB_NAME exists. Dropping..."
  dropdb -h $DB_HOST -p $DB_PORT $DB_NAME
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to drop database $DB_NAME."
    exit 1
  }
}

# Create the database if it doesn't exist
Write-Host "Checking if database needs to be created..."
$DB_EXISTS = Check-DbExists
if ([string]::IsNullOrEmpty($DB_EXISTS)) {
  Write-Host "Database $DB_NAME does not exist. Creating..."
  createdb -h $DB_HOST -p $DB_PORT $DB_NAME
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to create database $DB_NAME."
    exit 1
  }
} else {
  Write-Host "Database $DB_NAME already exists."
}

# Run migration scripts from the migrations directory
Write-Host "Running migration scripts..."
Get-ChildItem $MIGRATIONS_DIR -Filter *.sql | Sort-Object Name | ForEach-Object {
  $sql_file = $_.FullName
  Write-Host "Applying migration: $sql_file"
  psql -h $DB_HOST -p $DB_PORT -d $DB_NAME -f $sql_file
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Migration failed on script: $sql_file"
    exit 1
  }
}

Write-Host "All migrations applied successfully."