// questions
// questions.js

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "High Text Machine Language",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correctAnswer: 0
      },
      {
        question: "Which language is primarily used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correctAnswer: 2
      },
      {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: 0
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correctAnswer: 1
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style System",
          "Control Style Sheets"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correctAnswer: 2
      },
      {
        question: "Which operator is used to assign a value in JavaScript?",
        options: ["=", "==", "===", ":"],
        correctAnswer: 0
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = {1:'red', 2:'green', 3:'blue'}"
        ],
        correctAnswer: 1
      },
      {
        question: "Which method converts JSON data to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS()"],
        correctAnswer: 0
      },
      {
        question: "Which keyword is used to define a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "Which of the following is a loop in JavaScript?",
        options: ["for", "while", "do...while", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "Which symbol is used for multiplication in JavaScript?",
        options: ["*", "x", "%", "^"],
        correctAnswer: 0
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "font", "styles"],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: [
          "<script src='app.js'>",
          "<script href='app.js'>",
          "<script ref='app.js'>",
          "<script name='app.js'>"
        ],
        correctAnswer: 0
      },
      {
        question: "Which JavaScript method is used to write into the HTML output?",
        options: ["document.write()", "console.log()", "window.alert()", "document.getElement()"],
        correctAnswer: 0
      },
      {
        question: "Which HTML tag is used to display a picture on a webpage?",
        options: ["<img>", "<picture>", "<image>", "<src>"],
        correctAnswer: 0
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "alert('Hello World');",
          "msg('Hello World');"
        ],
        correctAnswer: 2
      },
      {
        question: "Which property is used to change the text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        correctAnswer: 2
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
          "function myFunction()",
          "function:myFunction()",
          "function = myFunction()",
          "create function myFunction()"
        ],
        correctAnswer: 0
      },
      {
        question: "Which JavaScript keyword is used to stop a loop?",
        options: ["exit", "stop", "break", "return"],
        correctAnswer: 2
      },
      {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correctAnswer: 2
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correctAnswer: 2
      },
      {
        question: "How do you declare a JavaScript variable without a value?",
        options: ["var x;", "let x;", "const x;", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "Which HTML element defines the title of a document?",
        options: ["<title>", "<head>", "<header>", "<meta>"],
        correctAnswer: 0
      },
      {
        question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
        options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
        correctAnswer: 0
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0
      },
      {
        question: "Which method removes the last element of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 1
      },
      {
        question: "Which HTML element is used for a clickable button?",
        options: ["<button>", "<input>", "<a>", "<click>"],
        correctAnswer: 0
      },
      {
        question: "How do you find the number with the highest value of x and y in JavaScript?",
        options: ["Math.ceil(x,y)", "Math.max(x,y)", "ceil(x,y)", "top(x,y)"],
        correctAnswer: 1
      }
    ]
  },
   {
    category: "history",
    questions: [
   
      {
        question: "Who was the first President of India?",
        options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain"],
        correctAnswer: 1
      },
      {
        question: "Which river is associated with the Vedic civilization?",
        options: ["Ganga", "Yamuna", "Saraswati", "Indus"],
        correctAnswer: 2
      },
      {
        question: "Who founded Buddhism?",
        options: ["Mahavira", "Gautama Buddha", "Guru Nanak", "Ashoka"],
        correctAnswer: 1
      },
      {
        question: "Which dynasty built the Qutub Minar?",
        options: ["Gupta", "Maurya", "Delhi Sultanate", "Mughal"],
        correctAnswer: 2
      },
      {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sarojini Naidu", "Rajkumari Amrit Kaur", "Vijayalakshmi Pandit"],
        correctAnswer: 0
      },
      {
        question: "In which year did India gain independence?",
        options: ["1942", "1947", "1950", "1952"],
        correctAnswer: 1
      },
      {
        question: "Who led the Salt March to Dandi in 1930?",
        options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        correctAnswer: 2
      },
      {
        question: "Which Mughal emperor built the Taj Mahal?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 2
      },
      {
        question: "Who was the first President of the Indian National Congress?",
        options: ["Lala Lajpat Rai", "Dadabhai Naoroji", "Allan Octavian Hume", "Womesh Chunder Bonnerjee"],
        correctAnswer: 3
      },
      {
        question: "Which freedom fighter is known as the 'Iron Man of India'?",
        options: ["Bhagat Singh", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Chandra Shekhar Azad"],
        correctAnswer: 1
      },
      {
        question: "Which kingdom was ruled by Ashoka?",
        options: ["Gupta Empire", "Maurya Empire", "Mughal Empire", "Satavahana Dynasty"],
        correctAnswer: 1
      },
      {
        question: "Who wrote the Indian National Anthem?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhas Chandra Bose", "Sarojini Naidu"],
        correctAnswer: 1
      },
      {
        question: "Which empire is known for the rock-cut caves at Ajanta and Ellora?",
        options: ["Maurya Empire", "Gupta Empire", "Chalukya Empire", "Satavahana Dynasty"],
        correctAnswer: 2
      },
      {
        question: "Who was the first Indian to win a Nobel Prize?",
        options: ["C. V. Raman", "Rabindranath Tagore", "Hargobind Khorana", "Amartya Sen"],
        correctAnswer: 1
      },
      {
        question: "The Battle of Plassey was fought in which year?",
        options: ["1757", "1764", "1776", "1789"],
        correctAnswer: 0
      },
      {
        question: "Who was known as the 'Nightingale of India'?",
        options: ["Sarojini Naidu", "Indira Gandhi", "Begum Rokeya", "Annie Besant"],
        correctAnswer: 0
      },
      {
        question: "Which Indian leader gave the slogan 'Do or Die' during the Quit India Movement?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        correctAnswer: 0
      },
      {
        question: "Who was the founder of the Maurya Empire?",
        options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Harsha"],
        correctAnswer: 0
      },
      {
        question: "Which famous monument did Emperor Akbar build in Agra?",
        options: ["Fatehpur Sikri", "Red Fort", "Qutub Minar", "India Gate"],
        correctAnswer: 0
      },
      {
        question: "Which movement was launched by Mahatma Gandhi in 1920?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
        correctAnswer: 0
      },
      {
        question: "Who was the first Sikh ruler of Punjab?",
        options: ["Maharaja Ranjit Singh", "Guru Gobind Singh", "Maharaja Dalip Singh", "Guru Nanak Dev"],
        correctAnswer: 0
      },

      // World History (9 questions, ~30%)
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswer: 0
      },
      {
        question: "In which year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        correctAnswer: 1
      },
      {
        question: "Who was the first man to step on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        correctAnswer: 0
      },
      {
        question: "Which country was formerly known as Persia?",
        options: ["Iraq", "Iran", "Turkey", "Afghanistan"],
        correctAnswer: 1
      },
      {
        question: "Who was the first emperor of China?",
        options: ["Qin Shi Huang", "Liu Bang", "Sun Yat-sen", "Kublai Khan"],
        correctAnswer: 0
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Macedonian Empire"],
        correctAnswer: 0
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1935"],
        correctAnswer: 1
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth II", "Angela Merkel"],
        correctAnswer: 1
      },
      {
        question: "Which country was the first to grant women the right to vote?",
        options: ["United States", "New Zealand", "United Kingdom", "Canada"],
        correctAnswer: 1
      },
      {
        question: "Who was the first President of India?",
        options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain"],
        correctAnswer: 1
      },
      {
        question: "Which river is associated with the Vedic civilization?",
        options: ["Ganga", "Yamuna", "Saraswati", "Indus"],
        correctAnswer: 2
      },
      {
        question: "Who founded Buddhism?",
        options: ["Mahavira", "Gautama Buddha", "Guru Nanak", "Ashoka"],
        correctAnswer: 1
      },
      {
        question: "Which dynasty built the Qutub Minar?",
        options: ["Gupta", "Maurya", "Delhi Sultanate", "Mughal"],
        correctAnswer: 2
      },
      {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sarojini Naidu", "Rajkumari Amrit Kaur", "Vijayalakshmi Pandit"],
        correctAnswer: 0
      },
      {
        question: "In which year did India gain independence?",
        options: ["1942", "1947", "1950", "1952"],
        correctAnswer: 1
      },
      {
        question: "Who led the Salt March to Dandi in 1930?",
        options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        correctAnswer: 2
      },
      {
        question: "Which Mughal emperor built the Taj Mahal?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 2
      },
      {
        question: "Who was the first President of the Indian National Congress?",
        options: ["Lala Lajpat Rai", "Dadabhai Naoroji", "Allan Octavian Hume", "Womesh Chunder Bonnerjee"],
        correctAnswer: 3
      },
      {
        question: "Which freedom fighter is known as the 'Iron Man of India'?",
        options: ["Bhagat Singh", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Chandra Shekhar Azad"],
        correctAnswer: 1
      },

      // World History (30%)
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswer: 0
      },
      {
        question: "In which year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        correctAnswer: 1
      },
      {
        question: "Who was the first man to step on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        correctAnswer: 0
      },
      {
        question: "Which country was formerly known as Persia?",
        options: ["Iraq", "Iran", "Turkey", "Afghanistan"],
        correctAnswer: 1
      },
      {
        question: "Who was the first emperor of China?",
        options: ["Qin Shi Huang", "Liu Bang", "Sun Yat-sen", "Kublai Khan"],
        correctAnswer: 0
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Macedonian Empire"],
        correctAnswer: 0
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1935"],
        correctAnswer: 1
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth II", "Angela Merkel"],
        correctAnswer: 1
      },
      {
        question: "Which country was the first to grant women the right to vote?",
        options: ["United States", "New Zealand", "United Kingdom", "Canada"],
        correctAnswer: 1
      },
      {
        question: "Who was the first emperor of the Roman Empire?",
        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        correctAnswer: 1
      }
    ]
  },
  
  {
    category: "space and science",
    questions: [
      { question: "What is the largest planet in our Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 2 },
      { question: "Which planet is known as the Red Planet?", options: ["Mercury", "Mars", "Venus", "Jupiter"], correctAnswer: 1 },
      { question: "The Sun is primarily composed of which element?", options: ["Oxygen", "Helium", "Hydrogen", "Carbon"], correctAnswer: 2 },
      { question: "Who proposed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Kepler"], correctAnswer: 1 },
      { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: 1 },
      { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Neptune", "Mars"], correctAnswer: 0 },
      { question: "What is the speed of light in vacuum?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "3x10^3 m/s"], correctAnswer: 0 },
      { question: "What is H2O commonly known as?", options: ["Oxygen", "Water", "Hydrogen", "Helium"], correctAnswer: 1 },
      { question: "Which galaxy do we live in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], correctAnswer: 1 },
      { question: "Who invented the first telescope?", options: ["Galileo", "Newton", "Kepler", "Copernicus"], correctAnswer: 0 },
      { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correctAnswer: 0 },
      { question: "Which is the hottest planet in our Solar System?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correctAnswer: 1 },
      { question: "Which part of the atom has no charge?", options: ["Proton", "Neutron", "Electron", "Nucleus"], correctAnswer: 1 },
      { question: "What force keeps planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Friction", "Tension"], correctAnswer: 1 },
      { question: "Which planet is known for its rings?", options: ["Saturn", "Mars", "Earth", "Jupiter"], correctAnswer: 0 },
      { question: "What is the study of stars called?", options: ["Biology", "Geology", "Astronomy", "Meteorology"], correctAnswer: 2 },
      { question: "Which is the smallest planet in our Solar System?", options: ["Mercury", "Mars", "Venus", "Earth"], correctAnswer: 0 },
      { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Gd", "Go"], correctAnswer: 0 },
      { question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1 },
      { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Newton"], correctAnswer: 0 },
      { question: "Which planet spins on its side?", options: ["Uranus", "Neptune", "Mars", "Venus"], correctAnswer: 0 },
      { question: "What is the nearest star to Earth?", options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Sun"], correctAnswer: 3 },
      { question: "Which planet is known as the Morning Star?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correctAnswer: 1 },
      { question: "Which scientist developed the laws of motion?", options: ["Einstein", "Newton", "Kepler", "Galileo"], correctAnswer: 1 },
      { question: "Which planet has a day longer than its year?", options: ["Venus", "Mercury", "Earth", "Mars"], correctAnswer: 0 },
      { question: "What is the boiling point of water in Celsius?", options: ["100°C", "90°C", "80°C", "120°C"], correctAnswer: 0 },
      { question: "Which planet is also called the Earth’s twin?", options: ["Mercury", "Venus", "Mars", "Neptune"], correctAnswer: 1 },
      { question: "Which is the largest volcano in the Solar System?", options: ["Mauna Loa", "Olympus Mons", "Mount Everest", "Vesuvius"], correctAnswer: 1 },
      { question: "Which gas makes up most of the Earth’s atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 1 },
      { question: "What is the chemical symbol for Iron?", options: ["Fe", "Ir", "In", "I"], correctAnswer: 0 }
    ]
  },
  {
    category: "biology",
    questions: [
      { question: "What is the basic unit of life?", options: ["Atom", "Cell", "Molecule", "Organ"], correctAnswer: 1 },
      { question: "Which organ pumps blood throughout the body?", options: ["Lungs", "Heart", "Kidney", "Liver"], correctAnswer: 1 },
      { question: "DNA stands for?", options: ["Deoxyribonucleic Acid", "Deoxyribogenetic Acid", "Deoxyribose Acid", "None of the above"], correctAnswer: 0 },
      { question: "Which blood cells help in clotting?", options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"], correctAnswer: 2 },
      { question: "Photosynthesis primarily occurs in which organelle?", options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"], correctAnswer: 1 },
      { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correctAnswer: 1 },
      { question: "What is the largest organ in the human body?", options: ["Liver", "Skin", "Heart", "Lungs"], correctAnswer: 1 },
      { question: "Which vitamin is produced when the skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correctAnswer: 3 },
      { question: "Which sugar is found in milk?", options: ["Glucose", "Lactose", "Sucrose", "Fructose"], correctAnswer: 1 },
      { question: "Which type of blood cells fight infections?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], correctAnswer: 1 },
      { question: "Which system controls hormones?", options: ["Digestive", "Endocrine", "Nervous", "Circulatory"], correctAnswer: 1 },
      { question: "Which organ stores bile?", options: ["Liver", "Gallbladder", "Pancreas", "Stomach"], correctAnswer: 1 },
      { question: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correctAnswer: 1 },
      { question: "Which part of the cell contains genetic material?", options: ["Nucleus", "Mitochondria", "Cytoplasm", "Ribosome"], correctAnswer: 0 },
      { question: "Which system transports oxygen and nutrients?", options: ["Respiratory", "Circulatory", "Digestive", "Excretory"], correctAnswer: 1 },
      { question: "What do plants release during photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"], correctAnswer: 1 },
      { question: "Which organ filters blood?", options: ["Liver", "Kidneys", "Heart", "Lungs"], correctAnswer: 1 },
      { question: "Which macronutrient provides energy?", options: ["Protein", "Carbohydrate", "Fat", "All of the above"], correctAnswer: 3 },
      { question: "Which blood group is the universal donor?", options: ["A", "B", "AB", "O"], correctAnswer: 3 },
      { question: "Which blood group is the universal recipient?", options: ["A", "B", "AB", "O"], correctAnswer: 2 },
      { question: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Spleen"], correctAnswer: 1 },
      { question: "Which part of the eye controls the amount of light?", options: ["Cornea", "Iris", "Pupil", "Lens"], correctAnswer: 1 },
      { question: "Which hormone regulates sleep?", options: ["Melatonin", "Adrenaline", "Insulin", "Cortisol"], correctAnswer: 0 },
      { question: "Which enzyme breaks down starch?", options: ["Lipase", "Amylase", "Protease", "Lactase"], correctAnswer: 1 },
      { question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correctAnswer: 1 },
      { question: "Which part of the nervous system controls voluntary actions?", options: ["Autonomic", "Somatic", "Central", "Peripheral"], correctAnswer: 1 },
      { question: "Which part of the plant conducts water?", options: ["Phloem", "Xylem", "Cambium", "Roots"], correctAnswer: 1 },
      { question: "Which organ is part of both digestive and endocrine systems?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], correctAnswer: 1 },
      { question: "Which vitamin is important for blood clotting?", options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"], correctAnswer: 1 }
    ]
  },
  {
    category: "geography",
    questions: [
      { question: "Which is the largest continent on Earth?", options: ["Africa", "Asia", "Europe", "Antarctica"], correctAnswer: 1 },
      { question: "Which country has the largest population?", options: ["India", "China", "USA", "Russia"], correctAnswer: 1 },
      { question: "The Nile river flows through which country?", options: ["Egypt", "Sudan", "Ethiopia", "All of the above"], correctAnswer: 3 },
      { question: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], correctAnswer: 2 },
      { question: "Which ocean is the largest by area?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correctAnswer: 2 },
      { question: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"], correctAnswer: 1 },
      { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arctic"], correctAnswer: 0 },
      { question: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: 1 },
      { question: "Which country has the most time zones?", options: ["USA", "Russia", "China", "Canada"], correctAnswer: 1 },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "South Korea"], correctAnswer: 1 },
      { question: "Which is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], correctAnswer: 0 },
      { question: "Which country is both in Europe and Asia?", options: ["Russia", "Turkey", "Kazakhstan", "All of the above"], correctAnswer: 3 },
      { question: "Which continent is called the Dark Continent?", options: ["Africa", "Asia", "Australia", "Europe"], correctAnswer: 0 },
      { question: "Which country has the most natural lakes?", options: ["USA", "Canada", "Russia", "Brazil"], correctAnswer: 1 },
      { question: "Which city is known as the City of Canals?", options: ["Venice", "Amsterdam", "Bangkok", "Bruges"], correctAnswer: 0 },
      { question: "Which is the deepest ocean trench?", options: ["Mariana Trench", "Tonga Trench", "Java Trench", "Kuril Trench"], correctAnswer: 0 },
      { question: "Which country has the longest coastline?", options: ["USA", "Canada", "Australia", "Russia"], correctAnswer: 1 },
      { question: "Which desert is the coldest in the world?", options: ["Gobi", "Sahara", "Antarctic", "Karakum"], correctAnswer: 2 },
      { question: "Which is the highest waterfall in the world?", options: ["Niagara", "Angel Falls", "Victoria Falls", "Iguazu Falls"], correctAnswer: 1 },
      { question: "Which mountain is known as the Roof of the World?", options: ["Everest", "K2", "Pamirs", "Himalayas"], correctAnswer: 2 },
      { question: "Which country is known for the Great Barrier Reef?", options: ["Australia", "USA", "Philippines", "Indonesia"], correctAnswer: 0 },
      { question: "Which is the largest bay in the world?", options: ["Bay of Bengal", "Hudson Bay", "San Francisco Bay", "Bengal Bay"], correctAnswer: 1 },
      { question: "Which river flows through Paris?", options: ["Seine", "Thames", "Danube", "Rhine"], correctAnswer: 0 },
      { question: "Which continent has the most countries?", options: ["Africa", "Asia", "Europe", "South America"], correctAnswer: 0 },
      { question: "Which is the highest mountain in Africa?", options: ["Kilimanjaro", "Kenya", "Atlas", "Ruwenzori"], correctAnswer: 0 },
      { question: "Which country has the largest desert outside Antarctica?", options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Thar Desert"], correctAnswer: 0 },
      { question: "Which sea is shrinking due to diversion of rivers?", options: ["Dead Sea", "Aral Sea", "Baltic Sea", "Caspian Sea"], correctAnswer: 1 },
      { question: "Which country is known as the Land of Fire and Ice?", options: ["Iceland", "Greenland", "Norway", "Finland"], correctAnswer: 0 },
      { question: "Which strait separates Europe and Asia?", options: ["Bering Strait", "Bosporus Strait", "Malacca Strait", "Hormuz Strait"], correctAnswer: 1 }
    ]
  },
  {
    category: "mathematics",
    questions: [
      { question: "What is the value of π (pi) approximately?", options: ["3.14", "2.17", "3.41", "3.00"], correctAnswer: 0 },
      { question: "What is 12 × 12?", options: ["144", "124", "154", "142"], correctAnswer: 0 },
      { question: "What is the square root of 256?", options: ["12", "14", "16", "18"], correctAnswer: 2 },
      { question: "Which number is a prime number?", options: ["15", "21", "29", "35"], correctAnswer: 2 },
      { question: "What is the sum of angles in a triangle?", options: ["180°", "360°", "90°", "270°"], correctAnswer: 0 },
      { question: "What is the value of 7! (factorial)?", options: ["5040", "720", "120", "40320"], correctAnswer: 0 },
      { question: "What is 15% of 200?", options: ["25", "30", "35", "40"], correctAnswer: 1 },
      { question: "What is the next prime number after 7?", options: ["9", "10", "11", "13"], correctAnswer: 2 },
      { question: "What is the perimeter of a square with side 5?", options: ["20", "25", "15", "10"], correctAnswer: 0 },
      { question: "Which is an irrational number?", options: ["1/2", "2/3", "√2", "4/5"], correctAnswer: 2 },
      { question: "What is 9 × 8?", options: ["72", "81", "64", "69"], correctAnswer: 0 },
      { question: "Which number is divisible by both 2 and 3?", options: ["7", "12", "15", "25"], correctAnswer: 1 },
      { question: "What is the sum of the first 10 natural numbers?", options: ["45", "55", "50", "60"], correctAnswer: 1 },
      { question: "What is 2^5?", options: ["10", "32", "16", "64"], correctAnswer: 1 },
      { question: "What is the hypotenuse of a right triangle with sides 3 and 4?", options: ["5", "6", "7", "8"], correctAnswer: 0 },
      { question: "What is the square of 15?", options: ["225", "215", "205", "235"], correctAnswer: 0 },
      { question: "What is the cube of 3?", options: ["6", "9", "27", "12"], correctAnswer: 2 },
      { question: "Which is the smallest prime number?", options: ["1", "2", "3", "5"], correctAnswer: 1 },
      { question: "What is the sum of angles in a quadrilateral?", options: ["360°", "180°", "270°", "540°"], correctAnswer: 0 },
      { question: "What is 25 × 12?", options: ["250", "300", "280", "320"], correctAnswer: 1 },
      { question: "What is the square root of 121?", options: ["10", "11", "12", "13"], correctAnswer: 1 },
      { question: "What is 100 ÷ 4?", options: ["20", "25", "24", "30"], correctAnswer: 1 },
      { question: "What is 0 divided by any number?", options: ["0", "1", "Undefined", "Infinity"], correctAnswer: 0 },
      { question: "What is 5^3?", options: ["15", "125", "25", "75"], correctAnswer: 1 },
      { question: "Which is an even prime number?", options: ["2", "3", "5", "7"], correctAnswer: 0 },
      { question: "What is the value of 1/4 + 1/2?", options: ["1/2", "3/4", "1", "1/3"], correctAnswer: 1 },
      { question: "Which number is divisible by 9?", options: ["27", "28", "25", "22"], correctAnswer: 0 },
      { question: "What is 14 × 6?", options: ["84", "74", "96", "64"], correctAnswer: 0 },
      { question: "Which angle measures 90°?", options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"], correctAnswer: 0 },
      { question: "What is 11 × 11?", options: ["111", "121", "112", "131"], correctAnswer: 1 }
    ]
  }

  // You can add next categories here in the same format
];





