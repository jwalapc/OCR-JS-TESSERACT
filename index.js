<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>OCR</title>
  </head>
  <body>
    <h1>Its an Image to text Recognization</h1>
    <form
      id="frmUploader"
      enctype="multipart/form-data"
      action="/upload"
      method="post"
    >
      <input type="file" name="image" multiple />

      <input type="submit" name="submit" id="btnSubmit" value="Upload" />
    </form>
  </body>
</html>
