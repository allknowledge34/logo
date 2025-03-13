// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: "application/json",
  };
  
    export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern mascot Logos Generate a text prompt to create Logo for Logo title/Brand name :Indian Spice with decription: Indian Restaurant and refering to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format'. with idea field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The user wants text prompts for a logo design based on a \"Modern mascot Logo\" style.\nThe logo is for \"Indian Spice\", an Indian Restaurant.\nThe user provided a reference prompt that describes a mascot logo with specific elements.\nI need to generate 4-5 logo ideas (each idea max 4-5 words) in JSON format, based on the reference prompt and brand details.\n\nLet's break down the reference prompt and adapt it for \"Indian Spice\":\n\n**Reference Prompt Breakdown:**\n\n*   **Character:** Friendly, animated, playful expression, classic uniform, distinctive accessory, holds signature item.\n*   **Elements:** Small decorative touches, natural accents.\n*   **Background:** Bold, circular, subtle accents.\n*   **Text:** Bold, stylized, curved brand name, decorative lines.\n*   **Style:** Fun, welcoming, full of character.\n\n**Adapting to \"Indian Spice\":**\n\n*   **Character:**  Could be an Indian chef, a Maharaja, a friendly tiger (common in Indian imagery, but needs to be carefully done to avoid stereotypes and keep it friendly), or even a spice character (like a chili or cardamom personified).\n*   **Uniform/Dress:**  Chef's uniform, traditional Indian attire (Kurta, Dhoti, Sherwani, Sari - depending on character).\n*   **Accessory:** Turban, chef's hat, spice garland, bindi, jewelry (subtle).\n*   **Signature Item:** Plate of curry, spices (chili, cardamom, cinnamon stick), naan bread, tandoor skewer.\n*   **Decorative Touches/Natural Accents:** Spice patterns, paisley, henna designs, curry leaves, chili peppers, saffron strands, turmeric roots.\n*   **Background:** Circular shape in warm Indian colors (saffron, red, orange, gold), maybe with spice patterns or subtle Indian motifs.\n*   **Text:** \"Indian Spice\" in a stylized, slightly curved font, possibly with a spice-inspired font or decorative lines resembling spice trails or Indian patterns.\n*   **Style:** Fun, welcoming, authentic Indian flavour, inviting, delicious.\n\n**Generating Logo Ideas (4-5 words each):**\n\n1.  **Idea 1:**  Smiling Chef with Spice\n2.  **Idea 2:**  Playful Tiger Holding Curry\n3.  **Idea 3:**  Animated Cardamom Character\n4.  **Idea 4:**  Friendly Maharaja with Spices\n5.  **Idea 5:**  Waving Naan Chef Mascot (Let's stick to 4 or 5 as requested, so 4 is fine, 5th is a bonus option if needed, 4 is enough)\n\n\n**JSON Output Format:**\n\n```json\n{\n  \"logo_ideas\": [\n    {\n      \"idea\": \"Smiling Chef with Spice\"\n    },\n    {\n      \"idea\": \"Playful Tiger Holding Curry\"\n    },\n    {\n      \"idea\": \"Animated Cardamom Character\"\n    },\n    {\n      \"idea\": \"Friendly Maharaja with Spices\"\n    }\n  ]\n}\n```\n\nLet's double check.\n- Number of ideas: 4 (as requested)\n- Word count per idea: within 4-5 words (yes)\n- JSON format: yes\n- Based on prompt and brand: yes\n- Mascot style: yes\n\nLooks good. I can proceed with generating the JSON output."},
            {text: "```json\n{\n  \"logo_ideas\": [\n    {\n      \"idea\": \"Smiling Chef Mascot Spices\"\n    },\n    {\n      \"idea\": \"Playful Elephant Curry Bowl\"\n    },\n    {\n      \"idea\": \"Animated Chili Pepper Chef\"\n    },\n    {\n      \"idea\": \"Friendly Tiger Holding Naan\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });

    export const AILogoPrompt = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a text prompt to create Logo for Logo Title/Brand name : indian chef,with description: indian spice, with Color combination of Sunset Warmth and include App Logo design idea and Referring to this Logo Prompt:create and simple design  Give me result in JSON portal with prompt field only\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The user wants a text prompt for a logo design.\nThe logo should be for a brand named \"indian chef\".\nThe logo should incorporate the theme \"indian spice\".\nThe color combination should be \"Sunset Warmth\".\nThe user wants the prompt to be suitable for creating an \"App Logo\".\nThe logo design should be \"simple\".\nThe final output should be a JSON with a single field named \"prompt\" containing the generated text prompt.\n\nLet's break down the components to create a good prompt:\n\n1. **Logo for:** Specify the brand name: \"indian chef\"\n2. **Theme/Keywords:**  Incorporate \"indian spice\" - think about visual elements related to spices.\n3. **Color Palette:** \"Sunset Warmth\" - This suggests warm colors like oranges, yellows, reds, browns.\n4. **Design Style:** \"simple design\" -  Keep it clean, minimal, and easily recognizable, especially for an app logo.\n5. **App Logo:** Explicitly mention \"App Logo design idea\" to guide the AI towards app-appropriate styles.\n\nNow, let's combine these elements into a prompt. I should consider different ways to phrase these elements in a prompt that an AI image generator would understand.\n\nDraft 1: \"Logo for 'indian chef' with indian spice theme, Sunset Warmth colors, simple app logo design.\" -  This is a bit basic.\n\nDraft 2: \"Create a simple app logo for 'indian chef'. Theme: indian spice. Color palette: Sunset Warmth. Design should be clean and modern.\" - Slightly better phrasing.\n\nDraft 3: \"Design a simple app logo for 'indian chef' that evokes 'indian spice'. Use a 'Sunset Warmth' color palette.  Keep the design clean, modern, and easily recognizable as an app icon.\" - More descriptive and emphasizes app icon characteristics.\n\nDraft 4: \"Generate a simple and modern app logo for 'indian chef'. The logo should represent 'indian spice' using a 'Sunset Warmth' color palette. Design for clarity and impact as an app icon.\" -  Getting closer.\n\nDraft 5: \"App logo design for 'indian chef'.  Concept: indian spice. Style: simple, modern, and clean. Color palette: Sunset Warmth (warm oranges, yellows, and reds).  Ideal for an app icon – easily recognizable and memorable.\" - More detailed and includes color examples.\n\nDraft 6: \"Create a simple and modern app logo for the brand 'indian chef'. The logo should visually represent 'indian spice' and use a 'Sunset Warmth' color palette (warm oranges, yellows, and reds).  Design with app icon clarity and memorability in mind.\" -  Refines clarity and emphasizes 'brand' and 'visually represent'.\n\nDraft 7: \"Generate a simple and modern app logo for 'indian chef'.  Incorporate the concept of 'indian spice' into the design. Use a 'Sunset Warmth' color palette, consisting of warm oranges, yellows, and reds. The logo should be clean, easily recognizable as an app icon, and memorable.\" -  Adding \"consisting of\" to clarify color palette.\n\nDraft 8: \"Design a simple and modern app logo for the brand 'indian chef'.  Visually represent 'indian spice' using a 'Sunset Warmth' color palette (warm oranges, yellows, and reds).  The logo should be clean, memorable, and effective as an app icon.\" - Removed \"easily recognizable as an app icon\" as 'effective as an app icon' covers it and is more concise.\n\nDraft 9: \"Create a simple and modern app logo for 'indian chef'.  Visually represent 'indian spice' using a 'Sunset Warmth' color palette (warm oranges, yellows, and reds).  The design should be clean, memorable, and effective as an app icon.\" -  Minor tweak in wording.\n\nDraft 10: \"Generate a simple and modern app logo for 'indian chef'. Logo concept: 'indian spice'. Color palette: 'Sunset Warmth' (warm oranges, yellows, reds). Design style: clean, memorable, effective as an app icon.\" - Using concise key phrases for concept, palette and style. This is good and clear.\n\nNow, let's put this into the JSON format.\n\n```json\n{\n  \"prompt\": \"Generate a simple and modern app logo for 'indian chef'. Logo concept: 'indian spice'. Color palette: 'Sunset Warmth' (warm oranges, yellows, reds). Design style: clean, memorable, effective as an app icon.\"\n}\n```\n\nThis looks good and covers all the requirements. Double check:\n- Logo for: indian chef - Yes\n- Description: indian spice - Yes\n- Color combination: Sunset Warmth - Yes\n- App Logo design idea - Yes\n- Simple design - Yes\n- JSON output with prompt field - Yes\n\nFinal check, the prompt is clear, concise and addresses all the user's requirements. It uses keywords that image generation models should understand."},
            {text: "```json\n{\n  \"prompt\": \"Create a simple and modern app logo for 'indian chef'.  The logo should visually represent 'indian spice' using a 'Sunset Warmth' color palette, incorporating warm oranges, yellows, and reds. Design should be clean, memorable, and effective as an app icon.\"\n}\n```"},
          ],
        },
      ],
    });
  
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
