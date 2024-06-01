# Synergy

This project is craeted with React. Please go to /frontend and type ```npm start``` to run it.

# Login
After starting the server, you will be directed to a log in page.

Login with user:
User: user
Password: password

Login with staff:
User: admin
Password: admin

## What it does
Synergy was built in consultation with cyber defense experts we reached out to in the healthcare industry. One of the many things they pioneered was the Cybersecurity Labelling Scheme (CLS) for Medical Devices, and it was only logical that we crafted our solution based on the insights gleaned from them.

Synergy is a web application built for both patients and healthcare institutions. 

### Patients
Patients can track the healthcare professionals that retrieve and update their medical records. By having another pair of eyes on medical data usage, it will be much easier to flag any unauthorised accesses. Additionally, should they own medical devices, they are able to register them to Synergy. Synergy will then keep track of any vulnerabilities or software patches for each device, and raise an alert should there be an advisory, recall or disclosed vulnerability that requires the patient's attention. This bridges the information gap between brands and patients, as well as shorten the lead time to security response. Additionally, they can browse a catalog of all medical devices available on the market, which is pre-sorted by their CLS rating. This not only incentivizes vendors to build secure products to obtain a higher catalog ranking, but also nudges patients to purchase safer devices as well.

### Healthcare institutions
Healthcare institutions can also benefit from Synergy as insights to macro-level cybersecurity. The first element is a cybersecurity risk dashboard that provides a breakdown of the institutions risk and compliance statistics. Risk scores will go down based on how many devices have low CLS ratings or with vulnerabilities, and compliance scores will go up based on how many devices have up-to-date patches. Other metrics available would also be notices for security matters, and number of devices that are un-patched/vulnerable. The second element is a catalog of all medical devices in its inventory, as well as other institutions. In the event that one device fails or is unsafe to use, they can request from other institutions that have spare inventory, a common practice today but now enhanced with Synergy's visbility.

## How we built it
We used a React frontend with TypeScript. We opted for a PostgreSQL backend with TypeScript as well, but also included hardcoded examples for demonstration and for anyone who wants to quickly try out Synergy without setting up the database.

Some libraries we used include AntDesign and Material UI.
