package com.example.Generative.AI.app.Controller;

import com.example.Generative.AI.app.Service.AppService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS}
)
public class AppController {

    private final AppService appService;

    @PostMapping("/chat")
    public String getResponse(@RequestBody String userInput) {
        return appService.GetRespone(userInput);
    }

    @PostMapping(value = "/voice", produces = "audio/mpeg") // add content type hint
    public byte[] getResponse1(@RequestBody String HexisOutput) {
        return appService.GetRespone2(HexisOutput);
    }

    // Handle preflight manually if needed
    @RequestMapping(value = "/voice", method = RequestMethod.OPTIONS)
    public void handleOptions() {
        // No body needed, just ensures OPTIONS is handled
    }
}
