# Polynomial Constant Term Calculator

This project implements a simplified version of Shamir's Secret Sharing algorithm to calculate the constant term \( c \) of a polynomial given its roots in a specific JSON format.

## Overview

The script reads a JSON file containing polynomial roots encoded in various bases, decodes these values, and calculates the constant term of the polynomial using Lagrange interpolation.

## Features

- Reads polynomial roots from a JSON file.
- Decodes values from different bases.
- Calculates the constant term \( c \) of the polynomial.

## Requirements

- Node.js (version 12 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Usage

1. Create a JSON file named `input.json` in the same directory as `polynomial.js`. The JSON file should follow the structure below:

   ```json
   {
       "keys": {
           "n": 10,
           "k": 7
       },
       "1": {
           "base": "6",
           "value": "13444211440455345511"
       },
       "2": {
           "base": "15",
           "value": "aed7015a346d63"
       },
       // Add more roots as needed
   }
   ```

2. Run the script using Node.js:
   ```bash
   node polynomial.js
   ```

3. The output will display the constant term \( c \):
   ```
   The constant term c is: <value>
   ```

## Example Input

Here is an example of a valid `input.json` file:
