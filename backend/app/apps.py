from django.apps import AppConfig
import keras
import joblib

class LoadConfig(AppConfig):
    name = 'app'
    
    """
    personal color ai model
    """ 
    mobilenet_v2 = keras.models.load_model('/app/app/ai/color/models/mobilenet_v2.h5')
    
    """
    fashion matching ai model
    """
    classifier = joblib.load('/app/app/ai/fashion/models/colorfit.pkl')
    scaler = joblib.load('/app/app/ai/fashion/models/scaler.pkl')
