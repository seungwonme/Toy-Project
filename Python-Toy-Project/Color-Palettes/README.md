# Color Palettes

## Introduction

> A simple web application that allows users to create color palettes from abstract descriptions using the GPT API.
> To use it, simply describe the colors you want to create

## Installation

### Install the required packages

```bash
pip install -r requirements.txt
```

### Add your OPENAI_API_KEY in `.env` file

```bash
echo "OPENAI_API_KEY={your-api-key}" > .env
```

### Run the application

```bash
python app.py
```

### Open your web browser and go to `http://127.0.0.1:5000` to view the application

## Usage

- Enter the color you want to generate
- If you want to copy the color code, click the color block

## Future Features
- A visual indication that something has been copied when copying;
- The ability to see colors created by others and prompts;
- The ability to review palettes that you have created. 
