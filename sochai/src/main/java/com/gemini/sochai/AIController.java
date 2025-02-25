package com.gemini.sochai;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping
public class AIController {

    private final QnAService qnAService;

    public ResponseEntity<String> askQuestions(@RequestBody Map<String, String> payload)
    {
        String question = payload.get("question");
        String answer = qnAService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
