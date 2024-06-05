# Digi-Doc
Introducing Digi Doc: Hospitals go paperless with EDMS & OCR. Boost efficiency, cut costs, enhance patient care. Advancing digital India.
Digi-Doc is a web application for managing doctor and patient records. This project includes functionalities for creating and managing doctors and patients, and a homepage to welcome users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


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


- **POST Create Patient /home/newPatient**
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



- **POST Create Patient /home/newPatient**
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



