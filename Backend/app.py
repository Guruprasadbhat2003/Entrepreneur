from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

GEMINI_API_KEY = 'AIzaSyBpDwZ3qIZ2U8TnDc5G316x_FTt68d1wUc'
GEMINI_API_URL = 'https://api.google.com/gemini/v1/chat/completions'  # Replace with actual URL

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('input')
    headers = {'Authorization': f'Bearer {GEMINI_API_KEY}'}
    payload = {
        'messages': [{'role': 'user', 'content': user_input}],
        'model': 'gemini-2.5'  # Replace with the desired model
    }
    response = requests.post(GEMINI_API_URL, json=payload, headers=headers)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to get response from Gemini API'}), 500

if __name__ == '__main__':
    app.run(debug=True)
