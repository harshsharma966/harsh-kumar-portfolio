"""
test_bilingual_tts.py
Verification script for Dual English & Hindi Text-to-Speech via XTTS v2 FastAPI API (port 6060)
Tests both English and Hindi synthesis, verifying output file integrity, audio header, and latency.
"""

import time
import requests
import os

API_URL = "http://localhost:6060/convert-tts"

TEST_CASES = [
    {
        "lang": "en",
        "name": "English Synthesis",
        "text": "Hello, this is a real-time voice synthesis test using Coqui XTTS v2 in English.",
        "voice_type": 1
    },
    {
        "lang": "hi",
        "name": "Hindi Synthesis",
        "text": "नमस्ते! यह वॉइस क्लोनिंग इंजन का हिंदी भाषा परीक्षण है।",
        "voice_type": 1
    }
]

def run_tests():
    print("=" * 65)
    print(" BILINGUAL (ENGLISH + HINDI) TTS VERIFICATION SUITE")
    print("=" * 65)
    
    all_passed = True
    
    for tc in TEST_CASES:
        print(f"\n▶ Testing: {tc['name']} (Language: '{tc['lang']}')")
        payload = {
            "text": tc["text"],
            "voice_type": tc["voice_type"],
            "language": tc["lang"]
        }
        
        start_t = time.time()
        try:
            res = requests.post(API_URL, json=payload, timeout=60)
            elapsed = time.time() - start_t
            
            if res.status_code == 200:
                content = res.content
                is_wav = content.startswith(b"RIFF") and b"WAVE" in content[:16]
                size_kb = len(content) / 1024.0
                
                print(f"  ✓ Status: 200 OK")
                print(f"  ✓ Latency: {elapsed:.2f} seconds")
                print(f"  ✓ Output Size: {size_kb:.2f} KB")
                print(f"  ✓ Valid WAV Header: {is_wav}")
                
                if not is_wav or size_kb < 5:
                    print("  ✗ Warning: Output format or size check failed!")
                    all_passed = False
            else:
                print(f"  ✗ Failed with status {res.status_code}: {res.text}")
                all_passed = False
                
        except Exception as e:
            print(f"  ✗ Connection/Request error: {e}")
            all_passed = False
            
    print("\n" + "=" * 65)
    if all_passed:
        print("  🎉 ALL TESTS PASSED: Both English & Hindi are 100% operational!")
    else:
        print("  ⚠️ SOME TESTS FAILED. Check backend logs.")
    print("=" * 65)

if __name__ == "__main__":
    run_tests()
