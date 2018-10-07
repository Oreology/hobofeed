import numpy as np
import argparse
import cv2
import time
import io
import requests
import json
from google.cloud import vision
from google.cloud.vision import types
from config import onesignal_id, auth_key

header = {"Content-Type": "application/json; charset=utf-8",
          "Authorization": auth_key}



vision_client = vision.ImageAnnotatorClient()

# define range of blue color in HSV
lower_black = np.array([0,0,0])
upper_black = np.array([180,255,120])

cap = cv2.VideoCapture(0)
while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()
    # Our operations on the frame come here
    mask = cv2.inRange(frame, lower_black, upper_black)
    mean_intensity = int(round(np.mean(mask)))
    if (mean_intensity < 200):
        cv2.putText(mask, 'OpenCV', (100,1000), cv2.FONT_HERSHEY_SIMPLEX, 50, (0,0,0), 3)
    else:
        start_time = time.time()
        cv2.putText(mask, '', (100,1000), cv2.FONT_HERSHEY_SIMPLEX, 50, (0,0,0), 3)
    try:
        start_time
    except:
        print('come right up')
    else:
        elapsed_time = time.time() - start_time
        if elapsed_time > 5:
            cv2.imwrite( "./frame.jpg", frame );
            filename = 'frame.jpg'
            with io.open(filename,'rb') as image_file:
                content = image_file.read()
            image = types.Image(content=content)
            response = vision_client.label_detection(image=image)
            labels = response.label_annotations
            concat = ""
            for label in labels:
                print(label.description)
                concat = concat + '\n' + label.description
            noti_msg = "Thanks for volunteering as free food!\nYou are a juicy mixture of: " + concat
            payload = {"app_id": onesignal_id,
                       "included_segments": ["All"],
                       "contents": {"en": noti_msg}}
            req = requests.post("https://onesignal.com/api/v1/notifications", headers=header, data=json.dumps(payload))
            del start_time
    cv2.imshow('frame',mask)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
