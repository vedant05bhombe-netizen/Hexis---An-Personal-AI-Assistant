package com.example.Generative.AI.app.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.Map;

@Service
public class AppService {

    // Very basic: hardcoded key and URL
    private final String URL = "https://api.openai.com/v1/responses";
    private final String Key = "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";


    private final String voiceId = "vzov6y10x6nsGNFg883S";
    private final String URL1 = "https://api.elevenlabs.io/v1/text-to-speech/" + voiceId;
    private final String Key1 = "sk_56fb4cb1f49361e6162ee9fb49007805a39f058db60bf3b4";

    @Autowired
    private RestTemplate restTemplate;

    public String GetRespone(String userInput) {
        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + Key); // basic way

        // Request body
        Map<String, Object> body = Map.of(
                "model", "gpt-4.1-mini",
                "input", Collections.singletonList(
                        Map.of("role", "user", "content", userInput)
                )
        );


        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);


        ResponseEntity<String> response = restTemplate.postForEntity(URL, request, String.class);


        return response.getBody();
    }


    public byte[] GetRespone2(String HexisOutput) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("xi-api-key", Key1);

        Map<String, Object> body = Map.of(
                "text", HexisOutput,
                "model_id", "eleven_multilingual_v2"
        );

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        ResponseEntity<byte[]> response = restTemplate.postForEntity(URL1, request, byte[].class);

        return response.getBody();
    }
}
