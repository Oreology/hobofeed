import io
from google.cloud import vision
from google.cloud.vision import types

vision_client = vision.ImageAnnotatorClient()

filename = 'pizza.jpeg'


with io.open(filename,'rb') as image_file:
	content = image_file.read()

image = types.Image(content=content)
response = vision_client.label_detection(image=image)
labels = response.label_annotations

for label in labels:
	print(label.description)
