# ImgAnnotations

## Step 1

Structure for output in src folder should follow this directory tree format and naming convention

```
src
└── output
    ├── leftWrist
    |   ├── leftWrist1.jpg
    |   ├── leftWrist2.jpg
    |   └── leftWrist3.jpg
    |
    ├── rightWrist
    |   ├── rightWrist1.jpg
    |   ├── rightWrist2.jpg
    |   └── rightWrist3.jpg
    |
    └── {part}
        ├── {part}1.jpg
        ├── {part}2.jpg
        └── {part}3.jpg
```

## Step 2

Ensure all the parts are in the array in json_generate.py and run the file to generate json objects.

```
PARTS = ["leftWrist", "rightWrist", "mask", "back"]
```

## Step 3

Since it is a development server, run the following code for server and client.

```
npm run dev
```

## Step 4

Annotate the images, make sure to pick the option before going to the next image.
