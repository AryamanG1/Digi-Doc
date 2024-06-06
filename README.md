# Digi-Doc

Digi-Doc is a web application for managing doctor and patient records. This project includes functionalities for creating and managing doctors and patients, and a homepage to welcome users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Homepage](#homepage)
  - [Patient Endpoints](#patient-endpoints)
  - [Doctor Endpoints](#doctor-endpoints)
- [Contributing](#contributing)


## Introduction

Digi-Doc is designed to simplify the process of managing medical records by providing a user-friendly interface for doctors and patients. This project uses Node.js, Express, and MongoDB to handle backend operations and data storage.

## Features

- Create and manage patient records
- Create and manage doctor records
- Homepage to welcome users

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/AryamanG1/Digi-Doc.git
    cd Digi-Doc
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following:
    ```
    CONTACT OWNER
    ```

4. **Start the server**
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can use tools like Postman or cURL to interact with the API. The server will be running on `http://localhost:5000`.

## API Endpoints

### Homepage

- **GET /**
  - Description: Welcome message.
  - Response:
    ```json
    {
      "message": "Welcome to home page"
    }
    ```

- **POST /home/newPatient**
  - Description: Create a new patient.
  - Request Body:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "1234567890",
      "dob": "1990-01-01",
      "location": "New York",
      "medicalHistory": "None",
      "bloodType": "O+"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Patient created successfully",
      "data": {
        "patientId": "generated_patient_id",
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "phone": "1234567890",
        "dob": "1990-01-01",
        "location": "New York",
        "medicalHistory": "None",
        "bloodType": "O+"
      }
    }
    ```

- **POST /home/newDoctor**
  - Description: Create a new doctor.
  - Request Body:
    ```json
    {
      "d_name": "John Doe",
      "d_email": "john.doe@example.com",
      "job": "Cardiologist",
      "degree": "MD",
      "year": 2010,
      "college": "Harvard Medical School",
      "proof_number": "AB123456"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Doctor created successfully",
      "data": {
        "d_name": "John Doe",
        "d_email": "john.doe@example.com",
        "job": "Cardiologist",
        "degree": "MD",
        "year": 2010,
        "college": "Harvard Medical School",
        "proof_number": "AB123456",
        "did": "generated_doctor_id"
      }
    }
    ```

### Patient Endpoints

- **GET /patient/about**
  - Description: View the patient's about page.
  - Request Headers:
    ```json
    {
      "Email": "jane.doe@example.com",
      "pid":"12345" 
    }
    ```
  - Response:
    ```json
    {
      "DOB": "1990-01-01",
      "email": "jane.doe@example.com",
      "phone": "1234567890",
      "locate": "New York"
    }
    ```

- **GET /patient/records**
  - Description: View the patient's records.
  - Request Headers:
    ```json
    {
      "Email": "jane.doe@example.com",
      "pid":"12345" 
    }
    ```
  - Response:
    ```json
    {
      "DOB": "1990-01-01",
      "email": "jane.doe@example.com",
      "phone": "1234567890",
      "locate": "New York",
      "medical_history": "None",
      "prescriptions": []
    }
    ```

- **POST /patient/add**
  - Description: Add a prescription for the patient.
  - Request Headers:
    ```json
    {
      "Email": "jane.doe@example.com",
      "pid":"12345" 
    }
    ```
  - Request Body:
    ```json
    {
      "email": "jane.doe@example.com",
      "pid": "generated_patient_id",
      "dname": "Dr. Smith",
      "rfc": "Routine Checkup",
      "find": "All clear",
      "pres": "None",
      "dte": "2023-06-01",
      "url": "http://example.com/prescription.jpg" // The URL will be given by the frontend by conversion through cloudinary
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Prescription added successfully",
      "prescription": {
        "doctorName": "Dr. Smith",
        "reasonForCheckup": "Routine Checkup",
        "findings": "All clear",
        "prescription": "None",
        "dateOfDoctorVisit": "2023-06-01T00:00:00.000Z",
        "uploadPicture": "http://example.com/prescription.jpg"
      }
    }
    ```

### Doctor Endpoints

- **GET /doctor/home**
  - Description: View the doctor's home page.
  - Request Headers:
    ```json
    { 
      "d_email":"john.doe@example.com",
      "did":"32451" 
    }
    ```
  - Response:
    ```json
    {
      "dname": "Dr. John Doe",
      "demail": "john.doe@example.com",
      "post": "Cardiologist"
    }
    ```

- **GET /doctor/view**
  - Description: View details of a given patient.
  - Request Headers:
    ```json
    { 
      "d_email":"john.doe@example.com",
      "did":"32451" 
    }
    ```
  - Request Body:
    ```json
    {
      "pid": "generated_patient_id"
    }
    ```
  - Response:
    ```json
    {
      "p_name": "Jane shaqeel",
      "p_dob": "1990-01-01",
      "p_phone": "1234567890",
      "bloodtype": "O+",
      "medicalhistory": "None",
      "last_doctor": "Dr. Smith",
      "last_findings": "All clear",
      "last_prescription": "None"
    }
    ```

- **POST /doctor/add**
  - Description: Add a prescription for a patient.
  - Request Headers:
    ```json
    { 
      "d_email":"john.doe@example.com",
      "did":"32451" 
    }
    ```
  - Request Body:
    ```json
    {
      "pid": "generated_patient_id",
      "rfc": "Routine Checkup",
      "find": "All clear",
      "pres": "None",
      "dte": "2023-06-01"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Prescription added successfully",
      "data": {
        "doctorName": "Dr. John Doe",
        "reasonForCheckup": "Routine Checkup",
        "findings": "All clear",
        "prescription": "None",
        "dateOfDoctorVisit": "2023-06-01T00:00:00.000Z"
      }
    }
    ```

## Contributing

We welcome contributions to improve Digi-Doc. Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes relevant tests.


