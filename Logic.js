let buttons = document.querySelectorAll(".btn");
console.log(buttons[0].innerText);
let toggled = false;

buttons[0].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[0].style.background = "white";
        buttons[0].style.color = "black";
        buttons[0].style.width = "1000px";
        buttons[0].style.height = "1000px";
        buttons[0].style.overflowX = "hidden";
        buttons[0].style.overflowY = "scroll";
        buttons[0].innerHTML = `
        <ul>
            <li><b>Bg. 2.56:</b> One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.</li>
            <li><b>Bg. 2.62:</b> While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.</li>
            <li><b>Bg. 2.63:</b> From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool.</li>
            <li><b>Bg. 5.26:</b> Those who are free from anger and all material desires, who are self-realized, self-disciplined and constantly endeavoring for perfection, are assured of liberation in the Supreme in the very near future.</li>
            <li><b>Bg 16.1-3:</b> The Supreme Personality of Godhead said: Fearlessness; purification of one’s existence; cultivation of spiritual knowledge; charity; self-control; performance of sacrifice; study of the Vedas; austerity; simplicity; nonviolence; truthfulness; freedom from anger; renunciation; tranquillity; aversion to faultfinding; compassion for all living entities; freedom from covetousness; gentleness; modesty; steady determination; vigor; forgiveness; fortitude; cleanliness; and freedom from envy and from the passion for honor – these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature.</li>
            <li><b>Bg. 16.21:</b> There are three gates leading to this hell – lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[0].style.background = "black";
        buttons[0].style.color = "white";
        buttons[0].style.width = "400px";
        buttons[0].style.height = "400px";
        buttons[0].style.overflow = "hidden"; // Reset overflow
        buttons[0].textContent = "Anger";
    }
    toggled = !toggled; // Toggle the state
});


buttons[1].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[1].style.background = "white";
        buttons[1].style.color = "black";
        buttons[1].style.width = "1000px";
        buttons[1].style.height = "1000px";
        buttons[1].style.overflowX = "hidden";
        buttons[1].style.overflowY = "scroll";
        buttons[1].innerHTML = `
        <ul>
            <li><b>Bg. 2.7:</b> The Supreme Lord is situated in everyone’s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.</li>
            <li><b>Bg. 3.2:</b> My intelligence is bewildered by Your equivocal instructions. Therefore, please tell me decisively which will be most beneficial for me.</li>
            <li><b>Bg. 18.61:</b> The Supreme Lord is situated in everyone’s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[1].style.background = "black";
        buttons[1].style.color = "white";
        buttons[1].style.width = "400px";
        buttons[1].style.height = "400px";
        buttons[1].style.overflow = "hidden"; // Reset overflow
        buttons[1].textContent = "Confusion";
    }
    toggled = !toggled; // Toggle the state
});

buttons[2].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[2].style.background = "white";
        buttons[2].style.color = "black";
        buttons[2].style.width = "1000px";
        buttons[2].style.height = "1000px";
        buttons[2].style.overflowX = "hidden";
        buttons[2].style.overflowY = "scroll";
        buttons[2].innerHTML = `
        <ul>
            <li><b>Bg. 12.13-14:</b> One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant, always satisfied, self-controlled, and engaged in devotional service with determination, his mind and intelligence fixed on Me – such a devotee of Mine is very dear to Me.</li>
            <li><b>Bg. 16.19:</b> Those who are envious and mischievous, who are the lowest among men, I perpetually cast into the ocean of material existence, into various demoniac species of life.</li>
            <li><b>Bg. 18.71:</b> And one who listens with faith and without envy becomes free from sinful reactions and attains to the auspicious planets where the pious dwell.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[2].style.background = "black";
        buttons[2].style.color = "white";
        buttons[2].style.width = "400px";
        buttons[2].style.height = "400px";
        buttons[2].style.overflow = "hidden"; // Reset overflow
        buttons[2].textContent = "Dealing With Envy";
    }
    toggled = !toggled; // Toggle the state
});

buttons[3].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[3].style.background = "white";
        buttons[3].style.color = "black";
        buttons[3].style.width = "1000px";
        buttons[3].style.height = "1000px";
        buttons[3].style.overflowX = "hidden";
        buttons[3].style.overflowY = "scroll";
        buttons[3].innerHTML = `
        <ul>
            <li><b>Bg. 2.13:</b> As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.</li>
            <li><b>Bg. 2.20:</b> For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval. He is not slain when the body is slain.</li>
            <li><b>Bg. 2.22:</b> As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.</li>
            <li><b>Bg. 2.25:</b> It is said that the soul is invisible, inconceivable and immutable. Knowing this, you should not grieve for the body.</li>
            <li><b>Bg. 2.27:</b> One who has taken his birth is sure to die, and after death one is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[3].style.background = "black";
        buttons[3].style.color = "white";
        buttons[3].style.width = "400px";
        buttons[3].style.height = "400px";
        buttons[3].style.overflow = "hidden"; // Reset overflow
        buttons[3].textContent = "Death Of Loved One";
    }
    toggled= !toggled; // Toggle the state
});

buttons[4].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[4].style.background = "white";
        buttons[4].style.color = "black";
        buttons[4].style.width = "1000px";
        buttons[4].style.height = "1000px";
        buttons[4].style.overflowX = "hidden";
        buttons[4].style.overflowY = "scroll";
        buttons[4].innerHTML = `
        <ul>
            <li><b>Bg. 2.3:</b> O son of Pṛthā, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy.</li>
            <li><b>Bg. 2.14:</b> O son of Kuntī, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.</li>
            <li><b>Bg. 2.21:</b> O Pārtha, how can a person who knows that the soul is indestructible, eternal, unborn and immutable kill anyone or cause anyone to kill?</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[4].style.background = "black";
        buttons[4].style.color = "white";
        buttons[4].style.width = "400px";
        buttons[4].style.height = "400px";
        buttons[4].style.overflow = "hidden"; // Reset overflow
        buttons[4].textContent = "Depession";
    }
    toggled = !toggled; // Toggle the state
});

buttons[5].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[5].style.background = "white";
        buttons[5].style.color = "black";
        buttons[5].style.width = "1000px";
        buttons[5].style.height = "1000px";
        buttons[5].style.overflowX = "hidden";
        buttons[5].style.overflowY = "scroll";
        buttons[5].innerHTML = `
        <ul>
            <li><b>Bg. 5.18:</b> The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brāhmaṇa, a cow, an elephant, a dog and a dog-eater [outcaste].</li>
            <li><b>Bg. 5.19:</b> Those whose minds are established in sameness and equanimity have already conquered the conditions of birth and death. They are flawless like Brahman, and thus they are already situated in Brahman.</li>
            <li><b>Bg. 6.32:</b> He is a perfect yogī who, by comparison to his own self, sees the true equality of all beings, in both their happiness and their distress, O Arjuna!</li>
            <li><b>Bg. 9.29:</b> I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[5].style.background = "black";
        buttons[5].style.color = "white";
        buttons[5].style.width = "400px";
        buttons[5].style.height = "400px";
        buttons[5].style.overflow = "hidden"; // Reset overflow
        buttons[5].textContent = "Discriminated";
    }
    toggled = !toggled; // Toggle the state
});

buttons[6].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[6].style.background = "white";
        buttons[6].style.color = "black";
        buttons[6].style.width = "1000px";
        buttons[6].style.height = "1000px";
        buttons[6].style.overflowX = "hidden";
        buttons[6].style.overflowY = "scroll";
        buttons[6].innerHTML = `
        <ul>
            <li><b>Bg. 4.10:</b> Being freed from attachment, fear and anger, being fully absorbed in Me and taking refuge in Me, many, many persons in the past became purified by knowledge of Me – and thus they all attained transcendental love for Me.</li>
            <li><b>Bg. 11.50:</b> Sañjaya said to Dhṛtarāṣṭra: The Supreme Personality of Godhead, Kṛṣṇa, having spoken thus to Arjuna, displayed His real four-armed form and at last showed His two-armed form, thus encouraging the fearful Arjuna.</li>
            <li><b>Bg. 18.30:</b> O son of Pṛthā, that understanding by which one knows what ought to be done and what ought not to be done, what is to be feared and what is not to be feared, what is binding and what is liberating, is in the mode of goodness.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[6].style.background = "black";
        buttons[6].style.color = "white";
        buttons[6].style.width = "400px";
        buttons[6].style.height = "400px";
        buttons[6].style.overflow = "hidden"; // Reset overflow
        buttons[6].textContent = "Fear";
    }
    toggled = !toggled; // Toggle the state
});

buttons[7].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[7].style.background = "white";
        buttons[7].style.color = "black";
        buttons[7].style.width = "1000px";
        buttons[7].style.height = "1000px";
        buttons[7].style.overflowX = "hidden";
        buttons[7].style.overflowY = "scroll";
        buttons[7].innerHTML = `
        <ul>
            <li><b>Bg. 4.36:</b> Even if you are considered to be the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will be able to cross over the ocean of miseries.</li>
            <li><b>Bg. 4.37:</b> As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities.</li>
            <li><b>Bg. 5.10:</b> One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water.</li>
            <li><b>Bg. 9.30:</b> Even if one commits the most abominable action, if he is engaged in devotional service he is to be considered saintly because he is properly situated in his determination.</li>
            <li><b>Bg. 10.3:</b> He who knows Me as the unborn, as the beginningless, as the Supreme Lord of all the worlds – he only, undeluded among men, is freed from all sins.</li>
            <li><b>Bg. 14.6:</b> O sinless one, the mode of goodness, being purer than the others, is illuminating, and it frees one from all sinful reactions. Those situated in that mode become conditioned by a sense of happiness and knowledge.</li>
            <li><b>Bg. 18.66:</b> Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[7].style.background = "black";
        buttons[7].style.color = "white";
        buttons[7].style.width = "400px";
        buttons[7].style.height = "400px";
        buttons[7].style.overflow = "hidden"; // Reset overflow
        buttons[7].textContent = "Feeling Sinful";
    }
    toggled = !toggled; // Toggle the state
});

buttons[8].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[8].style.background = "white";
        buttons[8].style.color = "black";
        buttons[8].style.width = "1000px";
        buttons[8].style.height = "1000px";
        buttons[8].style.overflowX = "hidden";
        buttons[8].style.overflowY = "scroll";
        buttons[8].innerHTML = `
        <ul>
            <li><b>Bg. 14.17:</b> From the mode of goodness, real knowledge develops; from the mode of passion, greed develops; and from the mode of ignorance develop foolishness, madness and illusion.</li>
            <li><b>Bg. 16.21:</b> There are three gates leading to this hell – lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.</li>
            <li><b>Bg. 17.25:</b> Without desiring fruitive results, one should perform various kinds of sacrifice, penance and charity with the word tat. The purpose of such transcendental activities is to get free from material entanglement.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[8].style.background = "black";
        buttons[8].style.color = "white";
        buttons[8].style.width = "400px";
        buttons[8].style.height = "400px";
        buttons[8].style.overflow = "hidden"; // Reset overflow
        buttons[8].textContent = "Greed";
    }
    toggled = !toggled; // Toggle the state
});

buttons[9].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[9].style.background = "white";
        buttons[9].style.color = "black";
        buttons[9].style.width = "1000px";
        buttons[9].style.height = "1000px";
        buttons[9].style.overflowX = "hidden";
        buttons[9].style.overflowY = "scroll";
        buttons[9].innerHTML = `
        <ul>
            <li><b>Bg. 3.8:</b> Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one’s physical body without work.</li>
            <li><b>Bg. 3.20:</b> Kings such as Janaka attained perfection solely by performance of prescribed duties. Therefore, just for the sake of educating the people in general, you should perform your work.</li>
            <li><b>Bg. 6.16:</b> There is no possibility of one’s becoming a yogī, O Arjuna, if one eats too much or eats too little, sleeps too much or does not sleep enough.</li>
            <li><b>Bg. 18.39:</b> And that happiness which is blind to self-realization, which is delusion from beginning to end and which arises from sleep, laziness and illusion is said to be of the nature of ignorance.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[9].style.background = "black";
        buttons[9].style.color = "white";
        buttons[9].style.width = "400px";
        buttons[9].style.height = "400px";
        buttons[9].style.overflow = "hidden"; // Reset overflow
        buttons[9].textContent = "Laziness";
    }
    toggled = !toggled; // Toggle the state
});

buttons[10].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[10].style.background = "white";
        buttons[10].style.color = "black";
        buttons[10].style.width = "1000px";
        buttons[10].style.height = "1000px";
        buttons[10].style.overflowX = "hidden";
        buttons[10].style.overflowY = "scroll";
        buttons[10].innerHTML = `
        <ul>
            <li><b>Bg. 6.30:</b> For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.</li>
            <li><b>Bg. 9.29:</b> I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him.</li>
            <li><b>Bg. 13.16:</b> The Supreme Truth exists outside and inside of all living beings, the moving and the nonmoving. Because He is subtle, He is beyond the power of the material senses to see or to know. Although far, far away, He is also near to all.</li>
            <li><b>Bg. 13.18:</b> He is the source of light in all luminous objects. He is beyond the darkness of matter and is unmanifested. He is knowledge, He is the object of knowledge, and He is the goal of knowledge. He is situated in everyone’s heart.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[10].style.background = "black";
        buttons[10].style.color = "white";
        buttons[10].style.width = "400px";
        buttons[10].style.height = "400px";
        buttons[10].style.overflow = "hidden"; // Reset overflow
        buttons[10].textContent = "Loneliness";
    }
    toggled = !toggled; // Toggle the state
});

buttons[11].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[11].style.background = "white";
        buttons[11].style.color = "black";
        buttons[11].style.width = "1000px";
        buttons[11].style.height = "1000px";
        buttons[11].style.overflowX = "hidden";
        buttons[11].style.overflowY = "scroll";
        buttons[11].innerHTML = `
        <ul>
            <li><b>Bg. 4.11:</b> As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pṛthā.</li>
            <li><b>Bg. 9.22:</b> But those who always worship Me with exclusive devotion, meditating on My transcendental form – to them I carry what they lack, and I preserve what they have.</li>
            <li><b>Bg. 9.34:</b> Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me.</li>
            <li><b>Bg. 18.66:</b> Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.</li>
            <li><b>Bg. 18.78:</b> Wherever there is Kṛṣṇa, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[11].style.background = "black";
        buttons[11].style.color = "white";
        buttons[11].style.width = "400px";
        buttons[11].style.height = "400px";
        buttons[11].style.overflow = "hidden"; // Reset overflow
        buttons[11].textContent = "Loosing Hope";
    }
    toggled = !toggled; // Toggle the state
});

buttons[12].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[12].style.background = "white";
        buttons[12].style.color = "black";
        buttons[12].style.width = "1000px";
        buttons[12].style.height = "1000px";
        buttons[12].style.overflowX = "hidden";
        buttons[12].style.overflowY = "scroll";
        buttons[12].innerHTML = `
        <ul>
            <li><b>Bg. 11.44:</b> You are the Supreme Lord, to be worshiped by every living being. Thus I fall down to offer You my respectful obeisances and ask Your mercy. As a father tolerates the impudence of his son, a friend the impertinence of a friend, or a husband the familiarity of his wife, please tolerate the wrongs I may have done You.</li>
            <li><b>Bg. 12.13-14:</b> One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant, always satisfied, self-controlled, and engaged in devotional service with determination, his mind and intelligence fixed on Me – such a devotee of Mine is very dear to Me.</li>
            <li><b>Bg. 16.1-3:</b> The Supreme Personality of Godhead said: Fearlessness; purification of one’s existence; cultivation of spiritual knowledge; charity; self-control; performance of sacrifice; study of the Vedas; austerity; simplicity; nonviolence; truthfulness; freedom from anger; renunciation; tranquillity; aversion to faultfinding; compassion for all living entities; freedom from covetousness; gentleness; modesty; steady determination; vigor; forgiveness; fortitude; cleanliness; and freedom from envy and from the passion for honor – these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[12].style.background = "black";
        buttons[12].style.color = "white";
        buttons[12].style.width = "400px";
        buttons[12].style.height = "400px";
        buttons[12].style.overflow = "hidden"; // Reset overflow
        buttons[12].textContent = "Practicing Forgiveness";
    }
    toggled = !toggled; // Toggle the state
});

buttons[13].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[13].style.background = "white";
        buttons[13].style.color = "black";
        buttons[13].style.width = "1000px";
        buttons[13].style.height = "1000px";
        buttons[13].style.overflowX = "hidden";
        buttons[13].style.overflowY = "scroll";
        buttons[13].innerHTML = `
        <ul>
            <li><b>Bg. 16.4:</b> Pride, arrogance, conceit, anger, harshness and ignorance – these qualities belong to those of demoniac nature, O son of Pṛthā.</li>
            <li><b>Bg. 16.13-15:</b> The demoniac person thinks: “So much wealth do I have today, and I will gain more according to my schemes. So much is mine now, and it will increase in the future, more and more. He is my enemy, and I have killed him, and my other enemies will also be killed. I am the lord of everything. I am the enjoyer. I am perfect, powerful and happy. I am the richest man, surrounded by aristocratic relatives. There is none so powerful and happy as I am. I shall perform sacrifices, I shall give some charity, and thus I shall rejoice.” In this way, such persons are deluded by ignorance.</li>
            <li><b>Bg. 18.26:</b> One who performs his duty without association with the modes of material nature, without false ego, with great determination and enthusiasm, and without wavering in success or failure is said to be a worker in the mode of goodness.</li>
            <li><b>Bg. 18.58:</b> If you become conscious of Me, you will pass over all the obstacles of conditioned life by My grace. If, however, you do not work in such consciousness but act through false ego, not hearing Me, you will be lost.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[13].style.background = "black";
        buttons[13].style.color = "white";
        buttons[13].style.width = "400px";
        buttons[13].style.height = "400px";
        buttons[13].style.overflow = "hidden"; // Reset overflow
        buttons[13].textContent = "Pride";
    }
    toggled = !toggled; // Toggle the state
});

buttons[14].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[14].style.background = "white";
        buttons[14].style.color = "black";
        buttons[14].style.width = "1000px";
        buttons[14].style.height = "1000px";
        buttons[14].style.overflowX = "hidden";
        buttons[14].style.overflowY = "scroll";
        buttons[14].innerHTML = `
        <ul>
            <li><b>Bg. 2.66:</b> One who is not connected with the Supreme [in Kṛṣṇa consciousness] can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. And how can there be any happiness without peace?</li>
            <li><b>Bg. 2.71:</b> A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego – he alone can attain real peace.</li>
            <li><b>Bg. 4.39:</b> A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.</li>
            <li><b>Bg. 5.29:</b> A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries.</li>
            <li><b>Bg. 8.28:</b> A person who accepts the path of devotional service is not bereft of the results derived from studying the Vedas, performing sacrifices, undergoing austerities, giving charity or pursuing philosophical and fruitive activities. Simply by performing devotional service, he attains all these, and at the end he reaches the supreme eternal abode.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[14].style.background = "black";
        buttons[14].style.color = "white";
        buttons[14].style.width = "400px";
        buttons[14].style.height = "400px";
        buttons[14].style.overflow = "hidden"; // Reset overflow
        buttons[14].textContent = "Seeking Peace";
    }
    toggled = !toggled; // Toggle the state
});

buttons[15].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[15].style.background = "white";
        buttons[15].style.color = "black";
        buttons[15].style.width = "1000px";
        buttons[15].style.height = "1000px";
        buttons[15].style.overflowX = "hidden";
        buttons[15].style.overflowY = "scroll";
        buttons[15].innerHTML = `
        <ul>
            <li><b>Bg. 2.60:</b> The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.</li>
            <li><b>Bg. 2.61:</b> One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence.</li>
            <li><b>Bg. 2.70:</b> A person who is not disturbed by the incessant flow of desires – that enter like rivers into the ocean, which is ever being filled but is always still – can alone achieve peace, and not the man who strives to satisfy such desires.</li>
            <li><b>Bg. 7.14:</b> This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[15].style.background = "black";
        buttons[15].style.color = "white";
        buttons[15].style.width = "400px";
        buttons[15].style.height = "400px";
        buttons[15].style.overflow = "hidden"; // Reset overflow
        buttons[15].textContent = "Temptation";
    }
    toggled = !toggled; // Toggle the state
});

buttons[16].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[16].style.background = "white";
        buttons[16].style.color = "black";
        buttons[16].style.width = "1000px";
        buttons[16].style.height = "1000px";
        buttons[16].style.overflowX = "hidden";
        buttons[16].style.overflowY = "scroll";
        buttons[16].innerHTML = `
        <ul>
            <li><b>Bg. 11.33:</b> Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasācī, can be but an instrument in the fight.</li>
            <li><b>Bg. 18.48:</b> Every endeavor is covered by some fault, just as fire is covered by smoke. Therefore one should not give up the work born of his nature, O son of Kuntī, even if such work is full of fault.</li>
            <li><b>Bg. 18.78:</b> Wherever there is Kṛṣṇa, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[16].style.background = "black";
        buttons[16].style.color = "white";
        buttons[16].style.width = "400px";
        buttons[16].style.height = "400px";
        buttons[16].style.overflow = "hidden"; // Reset overflow
        buttons[16].textContent = "Demotivated";
    }
    toggled = !toggled; // Toggle the state
});

buttons[17].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[17].style.background = "white";
        buttons[17].style.color = "black";
        buttons[17].style.width = "1000px";
        buttons[17].style.height = "1000px";
        buttons[17].style.overflowX = "hidden";
        buttons[17].style.overflowY = "scroll";
        buttons[17].innerHTML = `
        <ul>
            <li><b>Bg. 6.5:</b> One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.</li>
            <li><b>Bg. 6.6:</b> For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.</li>
            <li><b>Bg. 6.26:</b> From wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the Self.</li>
            <li><b>Bg. 6.35:</b> Lord Śrī Kṛṣṇa said: O mighty-armed son of Kuntī, it is undoubtedly very difficult to curb the restless mind, but it is possible by suitable practice and by detachment.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[17].style.background = "black";
        buttons[17].style.color = "white";
        buttons[17].style.width = "400px";
        buttons[17].style.height = "400px";
        buttons[17].style.overflow = "hidden"; // Reset overflow
        buttons[17].textContent = "Uncontrolled Mind";
    }
    toggled = !toggled; // Toggle the state
});

buttons[18].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[18].style.background = "white";
        buttons[18].style.color = "black";
        buttons[18].style.width = "1000px";
        buttons[18].style.height = "1000px";
        buttons[18].style.overflowX = "hidden";
        buttons[18].style.overflowY = "scroll";
        buttons[18].innerHTML = `
        <ul>
            <li><b>Bg. 3.37:</b> The Supreme Personality of Godhead said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.</li>
            <li><b>Bg. 3.41:</b> Therefore, O Arjuna, best of the Bhāratas, in the very beginning curb this great symbol of sin [lust] by regulating the senses, and slay this destroyer of knowledge and self-realization.</li>
            <li><b>Bg. 3.43:</b> Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence [Kṛṣṇa consciousness] and thus – by spiritual strength – conquer this insatiable enemy known as lust.</li>
            <li><b>Bg. 5.22:</b> An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kuntī, such pleasures have a beginning and an end, and so the wise man does not delight in them.</li>
            <li><b>Bg. 16.21:</b> There are three gates leading to this hell – lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[18].style.background = "black";
        buttons[18].style.color = "white";
        buttons[18].style.width = "400px";
        buttons[18].style.height = "400px";
        buttons[18].style.overflow = "hidden"; // Reset overflow
        buttons[18].textContent = "Lust";
    }
    toggled = !toggled; // Toggle the state
});

buttons[19].addEventListener("click", () => {
    if (!toggled) {
        console.log("clicked to expand");
        buttons[19].style.background = "white";
        buttons[19].style.color = "black";
        buttons[19].style.width = "1000px";
        buttons[19].style.height = "1000px";
        buttons[19].style.overflowX = "hidden";
        buttons[19].style.overflowY = "scroll";
        buttons[19].innerHTML = `
        <ul>
            <li><b>Bg. 15.15:</b> I am seated in everyone’s heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedānta, and I am the knower of the Vedas.</li>
            <li><b>Bg. 18.61:</b> The Supreme Lord is situated in everyone’s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.</li>
        </ul>`;
    } else {
        console.log("clicked to revert");
        buttons[19].style.background = "black";
        buttons[19].style.color = "white";
        buttons[19].style.width = "400px";
        buttons[19].style.height = "400px";
        buttons[19].style.overflow = "hidden"; // Reset overflow
        buttons[19].textContent = "Forgetfulness";
    }
    toggled = !toggled; // Toggle the state
});