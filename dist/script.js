/* Femscape | Research-linked educational content | Updated 2026-11-03
 * No analytics, trackers, or remote APIs. Editorial content is not legal/medical advice.
 */
const EG_SOURCES = [
 {id:"cdc-risk",title:"Intimate partner violence: Risk and protective factors",org:"Centers for Disease Control and Prevention",year:"2024",url:"https://www.cdc.gov/intimate-partner-violence/risk-factors/index.html",description:"Abuse risk arises from interacting individual, relationship, community and societal factors. Risk factors are not excuses or inevitable causes."},
 {id:"cdc-prevent",title:"Preventing intimate partner violence",org:"CDC",year:"2024",url:"https://www.cdc.gov/intimate-partner-violence/prevention/index.html",description:"Evidence-informed prevention strategies across healthy relationships, communities, environments and norms."},
 {id:"hotline-healthy",title:"Healthy versus unhealthy and abusive relationships",org:"National Domestic Violence Hotline",year:"Resource",url:"https://www.thehotline.org/resources/healthy-relationships/",description:"How control, isolation, threats, unequal decision-making and coercion differ from ordinary disagreements."},
 {id:"hotline-talk",title:"How can I talk to my abuser?",org:"National Domestic Violence Hotline",year:"Resource",url:"https://www.thehotline.org/resources/how-can-i-talk-to-my-abuser/",description:"Why communication techniques alone cannot fix an abusive power-and-control dynamic."},
 {id:"hotline-therapy",title:"Should I go to couples therapy with an abusive partner?",org:"National Domestic Violence Hotline",year:"Resource",url:"https://www.thehotline.org/resources/should-i-go-to-couples-therapy-with-my-abusive-partner/",description:"Safety warning: joint counseling is not recommended by the Hotline in abusive relationships."},
 {id:"un-days",title:"International Days and Weeks",org:"United Nations",year:"Annual calendar",url:"https://www.un.org/en/observances/list-days-weeks",description:"Official dates and themes for recurring United Nations observances."},
 {id:"un-16days",title:"16 Days of Activism",org:"UN Women",year:"2026 campaign",url:"https://chile.unwomen.org/en/what-we-do/ending-violence-against-women/unite/theme",description:"Campaign runs annually from November 25 through December 10; themes and materials may change each year."},
 {id:"nps-suffrage",title:"Introduction to women\u2019s suffrage",org:"National Park Service",year:"Historical research",url:"https://www.nps.gov/articles/introduction-women-s-suffrage.htm",description:"Seneca Falls 1848, 19th Amendment 1920, and racial exclusions from practical voting access."},
 {id:"un-timeline",title:"Women of the world, unite! Timeline",org:"UN Women",year:"Historical timeline",url:"https://interactive.unwomen.org/multimedia/timeline/womenunite/en/index.html",description:"Historical overview of women\u2019s rights, organizing, and international milestones."},
 {id:"un-csw",title:"A brief history of the Commission on the Status of Women",org:"UN Women",year:"Historical research",url:"https://chile.unwomen.org/en/csw/brief-history",description:"UN declarations, CEDAW in 1979 and the development of international gender equality frameworks."},
 {id:"un-pay",title:"International Equal Pay Day",org:"United Nations",year:"Annual observance",url:"https://www.un.org/en/observances/equal-pay-day",description:"Annual September 18 observance focused on equal pay for work of equal value."},
 {id:"rainn-donate",title:"Support survivors through RAINN",org:"RAINN",year:"Donation",url:"https://rainn.org/give-to-rainn",description:"Official nonprofit donation page and description of survivor support services."},
 {id:"un-women-day",title:"International Women\u2019s Day",org:"United Nations",year:"Annual observance",url:"https://www.un.org/en/observances/womens-day",description:"Official annual March 8 observance."},

 {id:'who2025',title:'Lifetime toll: 840 million women faced partner or sexual violence',org:'World Health Organization',year:'19 November 2025',url:'https://www.who.int/news/item/19-11-2025-lifetime-toll--840-million-women-faced-partner-or-sexual-violence',description:'WHO estimates 316 million women aged 15+ experienced physical or sexual intimate-partner violence within a 12-month period. This annual prevalence measure cannot be used to track actual real-time incidents.'},
 {id:'unfem2025',title:'Femicides in 2024: Global estimates',org:'UN Women / UNODC',year:'November 2025 (2024 data)',url:'https://chile.unwomen.org/en/digital-library/publications/2025/11/femicides-in-2024-global-estimates-of-intimate-partner-family-member-femicides',description:'An estimated 50,000 women and girls were killed by intimate partners or family members in 2024, equivalent to about 137 per day or one every ten minutes on average.'},
 {id:'ungei',title:'What is feminism?',org:'UN Girls’ Education Initiative (UNGEI)',year:'Glossary',url:'https://www.ungei.org/gender-transformative-education-glossary/gender/feminism',description:'A definition of feminism as movements and ideas aimed at gender equality and addressing gender injustice.'},
 {id:'menengage',title:'Accountability in work with men and boys',org:'MenEngage Alliance',year:'Framework',url:'https://menengage.org/approaches/accountability/about',description:'Practical principles for accountable allyship, listening, addressing harm and supporting women’s leadership.'},
 {id:'menfem',title:'Feminism and engaging men',org:'MenEngage Alliance',year:'Approach',url:'https://menengage.org/approaches/feminism/about',description:'Why intersectional feminism considers overlapping forms of discrimination and diverse experiences.'},
 {id:'who',title:'Violence against women',org:'World Health Organization',year:'Updated June 2026',url:'https://www.who.int/news-room/fact-sheets/detail/violence-against-women',description:'Global prevalence, definitions, consequences and prevention considerations. Estimates reflect population studies, not all forms of harm.'},
 {id:'unpaid',title:'SDG Goal 5 — Gender equality',org:'United Nations Statistics Division',year:'2024 report',url:'https://unstats.un.org/sdgs/report/2024/Goal-05/',description:'Comparable global indicators, including women spending roughly 2.5 times as long on unpaid domestic and care work.'},
 {id:'eeoc',title:'Sexual harassment',org:'U.S. Equal Employment Opportunity Commission',year:'Guidance',url:'https://www.eeoc.gov/sexual-harassment',description:'What can constitute workplace sexual harassment under U.S. federal law, and what thresholds apply.'},
 {id:'equalwork',title:'Sex-based discrimination at work',org:'U.S. Equal Employment Opportunity Commission',year:'Guidance',url:'https://www.eeoc.gov/sex-based-discrimination',description:'Employment discrimination, promotion, pay and sex-based harassment in the United States.'},
 {id:'cdc',title:'Preventing sexual violence',org:'U.S. Centers for Disease Control and Prevention',year:'2024',url:'https://www.cdc.gov/sexual-violence/prevention/index.html',description:'Evidence-informed prevention approaches, including bystander action, healthy relationship skills and engaging men and boys as allies.'},
 {id:'cdcipv',title:'Preventing intimate partner violence',org:'U.S. Centers for Disease Control and Prevention',year:'2024',url:'https://www.cdc.gov/intimate-partner-violence/prevention/index.html',description:'Prevention through respectful relationships and individual, community and societal approaches.'},
 {id:'rainn',title:'Consent 101: Respect, boundaries, and building trust',org:'RAINN',year:'Updated 2026',url:'https://rainn.org/5-rules-for-getting-consent/',description:'Clear, voluntary and ongoing consent; myths about silence, past contact and intoxication.'},
 {id:'bystander',title:'Campus prevention and response — bystander skills',org:'RAINN',year:'Guidance',url:'https://rainn.org/strategies-to-reduce-risk-increase-safety/campus-prevention-response/',description:'Practical ways to intervene without putting yourself or someone else at risk.'},
 {id:'hotline',title:'Get help',org:'National Domestic Violence Hotline (U.S.)',year:'24/7 service',url:'https://www.thehotline.org/get-help/',description:'Confidential assistance for people experiencing abuse and those helping them. Call 800-799-SAFE or text START to 88788.'}
];
const EG_LESSONS = [
 {id:'foundations',number:'01',category:'Foundations',min:7,title:'What feminism is — and is not',summary:'Start with the central goal: fair rights, opportunities, dignity and safety, while taking gender-based disadvantages seriously.',sections:[
 ['Start with the definition','Feminism is a family of social movements and ideas working for gender equality and to address gender injustice. Different feminist traditions disagree about methods and priorities. They are not a single organization with one rulebook.'],
 ['Why focus on women?','Women and girls have faced—and in many places still face—specific barriers in safety, political power, employment, education and bodily autonomy. Naming those patterns is not a claim that men never suffer or that every woman has the same experience.'],
 ['What a man can do','You do not need to get every term right on day one. Be curious about evidence, listen when someone describes a barrier, and ask how your own behavior or institutions can be fairer. Equality is a practice, not a badge.']],
 takeaways:['Feminism addresses gender injustice; it is not hostility toward men.','Feminists can disagree with one another.','Supporting women’s equality is compatible with caring about men’s wellbeing.'],tryThis:'Ask yourself: “Where did I learn my ideas about what women and men are supposed to do?”',sources:['ungei','menfem']},
 {id:'history',number:'02',category:'Foundations',min:8,title:'A short history of women’s rights',summary:'Understand why legal equality and everyday equality have not always arrived together.',sections:[
 ['Change came through organizing','Across countries and generations, women and allies organized for voting rights, education, property rights, workplace access, reproductive autonomy and protection from discrimination and violence. Their histories are varied, not one simple timeline.'],
 ['Rights can exist on paper and still be unequal in practice','A formal right to apply for a job does not automatically remove stereotypes, unsafe workplaces, caregiving burdens or unequal access to influence. That distinction helps explain why feminist work continues after laws change.'],
 ['Avoid the single-story trap','The experiences of Black women, Indigenous women, immigrant women, disabled women, working-class women and LGBTQ+ people have not been interchangeable. Whose history is missing matters.']],
 takeaways:['Legal reforms matter; implementation and culture also matter.','History differs by country and community.','Women from marginalized groups have always shaped feminist thought and action.'],tryThis:'Find a women’s-rights milestone in your own country, then ask whose rights it did—and did not—change.',sources:['ungei','menfem']},
 {id:'power',number:'03',category:'Systems',min:8,title:'Sexism, stereotypes, and patriarchy',summary:'Recognize how rules, habits and institutions can advantage or disadvantage people based on gender.',sections:[
 ['Sexism can be obvious or subtle','Sexism includes discrimination and stereotypes based on sex or gender. It can show up in an insult, a hiring decision, a double standard, or the assumption that one person should manage everyone’s emotional needs.'],
 ['What “patriarchy” means in this context','In feminist analysis, patriarchy describes social arrangements where men, as a group, have historically held disproportionate power and masculine norms are privileged. It describes patterns—not a claim that every man is powerful, malicious or personally responsible for all inequality.'],
 ['Patterns and people are different','A structural pattern does not decide every individual outcome. Investigate context rather than assuming motives. Ask who gets interrupted, believed, promoted, protected or expected to sacrifice time.']],
 takeaways:['Stereotypes constrain men as well as women, though not always in the same ways.','Structural analysis is about patterns, not assigning collective guilt.','Use observation and evidence instead of guessing personal motives.'],tryThis:'For one day, notice who gets asked to organize, take notes, soothe conflict or make final decisions.',sources:['ungei','equalwork','menfem']},
 {id:'listening',number:'04',category:'Everyday life',min:7,title:'Listening, intent, and impact',summary:'Learn how to receive feedback without turning a difficult conversation into a contest.',sections:[
 ['Intent and impact answer different questions','Intent asks what someone meant to do. Impact asks what happened to the person affected. Both can matter, but a good intention does not erase harm or eliminate the need to address it.'],
 ['Listen without making the other person prove their humanity','A useful response is: “I hear what you’re saying. Can you explain what I missed?” You may ask fair questions, but avoid demanding that someone relive painful details for your education.'],
 ['Accountability is behavioral','An apology is a starting point. Name the behavior, acknowledge its effect, avoid excuses and change what you do next. Repair can be offered, not demanded. Someone may not want further conversation.']],
 takeaways:['Listen before defending.','You can disagree respectfully without dismissing someone’s experience.','Behavior change carries more weight than publicly declaring yourself an ally.'],tryThis:'Practice: “I see how that landed. I’ll change ___. Is there anything I should understand better?”',sources:['menengage']},
 {id:'consent',number:'05',category:'Safety & respect',min:9,title:'Consent, boundaries, and autonomy',summary:'Build the habit of asking, respecting “no,” and checking in rather than assuming.',sections:[
 ['Consent is an ongoing agreement','In sexual contexts, consent must be freely given, informed and communicated. A past yes is not a future yes. Flirting, silence, freezing, clothing or a relationship do not automatically establish consent.'],
 ['Pressure undermines choice','Guilt, repeated demands, intimidation, threats or taking advantage of severe intoxication can undermine a person’s ability to choose freely. If there is uncertainty, stop and ask.'],
 ['Boundaries belong in everyday life too','Ask before sharing private messages, touching someone, making assumptions about affection, or pushing a personal topic. Respecting a boundary does not require you to agree with the person’s reasons.']],
 takeaways:['Clear, voluntary and ongoing agreement matters.','Silence or lack of resistance is not consent.','When unsure, pause and check in.'],tryThis:'Replace guessing with a question: “Would you be comfortable with this? It’s completely okay to say no.”',sources:['rainn','cdc']},
 {id:'care',number:'06',category:'Everyday life',min:8,title:'Domestic work and the mental load',summary:'See invisible work: planning, remembering, anticipating, organizing and caregiving.',sections:[
 ['The unpaid-work imbalance','The UN’s 2024 SDG report says women globally spend about 2.5 times as many hours per day on unpaid domestic and care work as men. The global average varies considerably by region and household.'],
 ['Doing tasks is not the same as owning them','Someone may wash the dishes but still rely on a partner to notice, plan and delegate. Mental load includes remembering appointments, tracking supplies and anticipating family needs.'],
 ['Share responsibility, not just chores','Make responsibilities visible together. Decide who owns each recurring task, including planning and follow-through. Talk about workload without treating either partner like a manager or employee.']],
 takeaways:['Unpaid work has real opportunity costs.','Ownership includes noticing and planning.','Fair sharing is negotiated, not assumed from gender.'],tryThis:'List 10 recurring home tasks. For each, write who notices it, plans it, does it and follows up.',sources:['unpaid']},
 {id:'work',number:'07',category:'Systems',min:8,title:'Fairness, pay, and harassment at work',summary:'Distinguish unequal patterns from individual decisions; learn the basics of workplace respect.',sections:[
 ['Pay and opportunity require careful analysis','Aggregate gender pay gaps describe differences across a workforce; they do not automatically prove that two people in identical jobs receive different pay. Examine role, hours, seniority, opportunity, discrimination and promotion patterns.'],
 ['Harassment is not limited to unwanted touching','U.S. EEOC guidance covers unwelcome sexual advances and other sex-based harassment, including some repeated offensive remarks. Not every rude comment is illegal; legal thresholds and jurisdiction matter. Behavior can still be disrespectful even if it does not meet a legal standard.'],
 ['Everyday allyship at work','Credit ideas accurately, share meeting airtime, use clear promotion criteria, take complaints seriously and avoid gossip or retaliation. If someone reports misconduct, prioritize their safety, privacy and the proper reporting process.']],
 takeaways:['Numbers need context and careful sourcing.','A workplace can be unfair without every conflict being unlawful.','Fair evaluation and consistent standards matter.'],tryThis:'In your next meeting, notice whose contributions get credited and who gets interrupted.',sources:['equalwork','eeoc','unpaid']},
 {id:'violence',number:'08',category:'Safety & respect',min:9,title:'Gender-based violence and coercive control',summary:'Learn what harm can look like, why it matters, and how to respond with care.',sections:[
 ['The scale is serious','WHO estimates that nearly one in three women aged 15+ worldwide have experienced physical and/or sexual intimate partner violence or non-partner sexual violence in their lifetime. The estimate does not cover every type of abuse and should not be read as a claim about every man.'],
 ['Not all abuse leaves visible injuries','Coercive control can include threats, humiliation, isolation, monitoring, sexual pressure and restricting access to money or support. Anyone can experience abuse; women face particular patterns of gender-based violence.'],
 ['Support without taking control','If someone discloses abuse, believe that the disclosure matters, listen, ask what support they want and avoid pressuring them to report, leave or confront a partner. A trained advocate can help with safety planning.']],
 takeaways:['Violence is a public health and human rights concern.','Control and coercion can occur without physical injury.','Survivors retain agency over what to do next.'],tryThis:'Remember a first response: “Thank you for telling me. What would feel safest or most helpful right now?”',sources:['who','cdcipv','hotline']},
 {id:'bystander',number:'09',category:'Safety & respect',min:7,title:'Speak up without escalating harm',summary:'Use practical, safer bystander choices at work, online and with friends.',sections:[
 ['There is more than one kind of intervention','You can interrupt with a distraction, check in privately with the person affected, recruit a host or supervisor, or offer support afterward. Not every situation calls for public confrontation.'],
 ['Safety before performance','Do not endanger yourself or someone else simply to make a point. Seek security, staff or emergency help if there is an immediate threat. Respect the affected person’s choices and privacy.'],
 ['Small moments change norms','When a friend shares a degrading joke, a simple “I don’t think that’s funny” can set a boundary. After a meeting, “I think she was making that point earlier” can return credit.']],
 takeaways:['Bystander action can be direct or indirect.','Safety, dignity and privacy come first.','Consistency matters more than grand gestures.'],tryThis:'Choose one calm phrase you can realistically say when a conversation gets disrespectful.',sources:['cdc','bystander']},
 {id:'intersectionality',number:'10',category:'Foundations',min:8,title:'Intersectionality: different lives, different barriers',summary:'Understand why gender does not operate independently of race, disability, class and other experiences.',sections:[
 ['One person can face multiple pressures','Intersectionality is a way to examine how systems and identities overlap. For example, the barriers experienced by a disabled woman may not be fully understood by looking at disability and gender as separate issues.'],
 ['Not every woman shares the same story','Income, geography, disability, ethnicity, age, sexuality and gender identity can shape both risks and access to help. Listening to different voices prevents simplistic “all women” claims.'],
 ['Use it as a lens, not a competition','The point is to better understand complex experiences and design fairer responses—not rank people’s suffering or demand agreement on every political issue.']],
 takeaways:['Different groups experience inequality differently.','Avoid treating any group as a monolith.','You can focus on a specific problem while recognizing overlapping factors.'],tryThis:'Read or listen to an account from a woman whose circumstances differ from yours; note what you had not considered.',sources:['menfem','ungei']},
 {id:'masculinity',number:'11',category:'Everyday life',min:7,title:'Masculinity without rigid rules',summary:'Respect men’s emotional lives while questioning expectations that limit everyone.',sections:[
 ['Being a man need not mean suppressing feeling','Strength, reliability and courage need not require dominance, emotional silence or refusing support. Men can be assertive and compassionate.'],
 ['Pressure can move in both directions','Rigid expectations may discourage men from caregiving and help-seeking while pushing women toward invisible support work. Challenging those expectations creates more choices for everyone.'],
 ['Practice relational strength','Take responsibility for your emotions without making others manage them. Maintain friendships, ask for help, express vulnerability and respect a partner’s independence.']],
 takeaways:['Masculinity is not inherently harmful.','Rigid stereotypes can limit men and women.','Accountability and emotional openness are compatible with strength.'],tryThis:'Tell a trusted friend one honest thing you have been holding in, without expecting them to fix it.',sources:['menengage','cdcipv']},
 {id:'allyship',number:'12',category:'Everyday life',min:8,title:'From agreement to accountable action',summary:'Turn understanding into concrete habits, and stay open to correction.',sections:[
 ['Support is a verb','An ally uses influence to support fairness: sharing labor, calling out disrespect, challenging unfair systems, and making room for the leadership of people affected.'],
 ['Repair is not a demand for forgiveness','A useful apology identifies the action, acknowledges its effect, offers an appropriate remedy and changes the pattern. The other person can set boundaries or decline further engagement.'],
 ['Keep learning without seeking a gold star','Do the work consistently, including when nobody is watching. Read sources carefully, ask open-ended questions and accept that sincere people can disagree about tactics.']],
 takeaways:['Focus on habits rather than labels.','Accept feedback without public defensiveness.','Measure progress by what changes in your actions.'],tryThis:'Pick one behavior you will change this week, define exactly what it looks like, and check back in seven days.',sources:['menengage','menfem']}
];
const EG_SCENARIOS = [
 {id:'interrupt',title:'An idea is overlooked',tag:'Work',prompt:'In a meeting, a woman shares a suggestion. Minutes later, another teammate repeats it and receives the credit.',choices:[
 {label:'Say nothing; it is awkward to intervene.',feedback:'Silence can allow the pattern to continue. You can redirect attention without making it confrontational.'},
 {label:'“That builds on what Maya said earlier. Maya, want to expand on it?”',feedback:'Strong choice: it gives credit back, invites her perspective, and keeps the discussion productive.'},
 {label:'Interrupt to give a speech about sexism.',feedback:'The intent may be good, but a public speech can shift attention from her work to your performance.'}],best:1,lesson:'work'},
 {id:'disclosure',title:'Someone tells you they were harmed',tag:'Listening',prompt:'A friend describes a sexist experience and seems upset. You do not know what happened firsthand.',choices:[
 {label:'“Maybe they didn’t mean it that way.”',feedback:'Intent may matter later, but beginning here can feel dismissive and shift the burden to the person affected.'},
 {label:'Ask them to prove it before you listen.',feedback:'Questions can be appropriate, but support does not require an immediate cross-examination.'},
 {label:'“That sounds difficult. Do you want me to listen, or help think through options?”',feedback:'Strong choice: it acknowledges the experience and gives the person a say in what support looks like.'}],best:2,lesson:'listening'},
 {id:'pressure',title:'A partner hesitates',tag:'Consent',prompt:'You want physical intimacy. Your partner is quiet and seems unsure, even though you have been intimate before.',choices:[
 {label:'Pause and ask whether they actually want to continue; accept any answer.',feedback:'Strong choice: past intimacy is not present consent, and uncertainty is a reason to check in.'},
 {label:'Keep going unless they explicitly say “no.”',feedback:'Silence, stillness or uncertainty is not a reliable agreement.'},
 {label:'Explain how rejected you will feel unless they agree.',feedback:'Guilt and pressure can undermine freely given consent.'}],best:0,lesson:'consent'},
 {id:'mental-load',title:'“Just tell me what to do”',tag:'Home',prompt:'Your partner says they are exhausted from managing family responsibilities. You do plenty of individual chores.',choices:[
 {label:'List all the chores you already do.',feedback:'It can be important to compare workloads, but a defensive list may overlook planning and follow-through.'},
 {label:'Offer to fully own recurring responsibilities, including planning, and review fairness together.',feedback:'Strong choice: it shares the ongoing responsibility, not just the final task.'},
 {label:'Tell them they are better at remembering things.',feedback:'This repeats the stereotype and leaves the invisible work unshared.'}],best:1,lesson:'care'},
 {id:'joke',title:'A friend makes a degrading joke',tag:'Bystander',prompt:'In a group chat, someone posts a joke that stereotypes women. Several people laugh.',choices:[
 {label:'Share it with another group to show how bad it is.',feedback:'That spreads the content and may expose people to more unwanted material.'},
 {label:'Attack the person publicly until they apologize.',feedback:'Public escalation can crowd out behavior change and may produce more harm.'},
 {label:'“I don’t find that funny. Can we not make women the punchline?”',feedback:'Strong choice: calm, clear and focused on the behavior.'}],best:2,lesson:'bystander'},
 {id:'private',title:'Someone shares a private message',tag:'Digital respect',prompt:'A friend wants to publicly post private messages from a disagreement to prove a point. There is no immediate threat.',choices:[
 {label:'Encourage a private conversation or seek consent before sharing; consider safety exceptions.',feedback:'Strong choice: default to privacy and proportionate action, while recognizing safety/reporting exceptions.'},
 {label:'Post everything so the audience can decide.',feedback:'Public exposure can violate trust and escalate conflict; context and safety still matter.'},
 {label:'Make a meme out of the exchange.',feedback:'Humiliation is unlikely to create a respectful resolution.'}],best:0,lesson:'listening'},
 {id:'bar',title:'You notice a risky situation',tag:'Safety',prompt:'At a party, someone looks uncomfortable while another person repeatedly pressures them to leave together.',choices:[
 {label:'Challenge the person aggressively no matter how unsafe the situation is.',feedback:'Direct confrontation can escalate risk; choose a safer option.'},
 {label:'Check in privately, create a distraction, or involve trusted staff or friends.',feedback:'Strong choice: gives practical ways to help while prioritizing everyone’s safety.'},
 {label:'Assume it is not your business.',feedback:'Doing nothing misses potentially safe options for checking in or recruiting help.'}],best:1,lesson:'bystander'},
 {id:'pushback',title:'You get feedback you dislike',tag:'Accountability',prompt:'Someone says a joke you made hurt them. You had no intention of hurting them.',choices:[
 {label:'“You’re too sensitive. I didn’t mean it.”',feedback:'This centers your intention and dismisses what happened.'},
 {label:'Demand immediate forgiveness after apologizing.',feedback:'An apology does not entitle you to reconciliation.'},
 {label:'“I didn’t intend that, but I hear you. I’m sorry, and I won’t repeat it.”',feedback:'Strong choice: gives context without using it to erase the impact, and commits to a change.'}],best:2,lesson:'allyship'}
];
const EG_QUIZ = [
 {q:'Which best describes feminism?',choices:['A belief that women must have power over men','Movements and ideas addressing gender injustice and seeking equality','A single organization with one set of rules'],answer:1,why:'Feminist traditions vary; the shared focus is addressing gender-based inequality.',source:'ungei'},
 {q:'Someone says your comment hurt them. What is the strongest first response?',choices:['Ask what you missed and listen','Say your good intentions make it harmless','Ask them to stop being offended'],answer:0,why:'Intent can be discussed, but listening and changing harmful behavior matter.',source:'menengage'},
 {q:'Which statement about consent is accurate?',choices:['A past yes applies until explicitly revoked next year','Consent is implied when someone does not resist','Consent is freely given, informed, and ongoing'],answer:2,why:'Clothing, silence and past encounters do not automatically establish consent.',source:'rainn'},
 {q:'How does the UN describe average unpaid care and domestic work globally in its 2024 Goal 5 report?',choices:['Women spend about 2.5 times as much time as men','Men and women spend exactly equal time','All households show the same ratio'],answer:0,why:'This is a global average, with substantial variation by region and household.',source:'unpaid'},
 {q:'Which is a practical example of the mental load?',choices:['Only performing a task you were asked to do','Remembering and organizing tasks before anyone asks','Taking credit for finishing a chore'],answer:1,why:'Planning, noticing, remembering and follow-through are part of domestic work.',source:'unpaid'},
 {q:'According to the WHO, which statement is closest to its current global lifetime estimate?',choices:['Every woman has experienced violence','Nearly 1 in 3 women have experienced defined forms of partner or sexual violence','No meaningful evidence exists'],answer:1,why:'The estimate concerns particular forms of physical/sexual violence and should not be generalized to all forms of mistreatment.',source:'who'},
 {q:'When witnessing possible harassment, what is a safer bystander response?',choices:['Always confront physically','Ignore the situation','Distract, check in, recruit help or support afterward'],answer:2,why:'Match the action to safety and the affected person’s needs.',source:'bystander'},
 {q:'Which statement about the gender pay gap is most careful?',choices:['An aggregate gap proves every same-job pay decision is unequal','It is a population pattern that requires context to explain','It cannot be influenced by discrimination'],answer:1,why:'Aggregate pay differences may reflect multiple contributing factors, including unequal opportunities and discrimination.',source:'equalwork'},
 {q:'Intersectionality means…',choices:['People’s experiences can be shaped by overlapping social systems','Everyone has identical experiences of sexism','One kind of inequality is the only one that matters'],answer:0,why:'It helps account for differences across race, class, disability, gender and more.',source:'menfem'},
 {q:'Which is a more accountable form of allyship?',choices:['Prioritize being praised for your intentions','Change behavior, share influence and respect feedback','Demand that everyone agree with you'],answer:1,why:'Consistent, concrete action and willingness to repair are stronger than declarations.',source:'menengage'},
 {q:'Which describes workplace sexual harassment under U.S. federal guidance?',choices:['Any disagreement at work','Only physical misconduct','Unwelcome sex-based conduct that may be unlawful if severe or pervasive or tied to employment consequences'],answer:2,why:'Not every offensive comment is unlawful; context, seriousness, frequency and jurisdiction matter.',source:'eeoc'},
 {q:'What does supporting gender equality imply about men’s needs?',choices:['Men’s mental health no longer matters','It can include men’s wellbeing while addressing specific harms faced by women','All men must express emotion in one prescribed way'],answer:1,why:'Fairness should expand people’s choices and dignity rather than impose new rigid stereotypes.',source:'menengage'}
];
const EG_MYTHS = [
 {claim:'“Feminism is about hating men.”',answer:'No. Its central aim is to challenge gender inequality. Some individuals may express hostility, but their behavior does not define all feminist movements.',sources:['ungei']},
 {claim:'“If I support equality, I must agree with every feminist.”',answer:'No. Feminism encompasses many traditions and disagreements about methods. You can respectfully disagree and still recognize documented harms.',sources:['ungei','menfem']},
 {claim:'“If men have problems, women cannot be disadvantaged.”',answer:'Both can be true. Different groups face different risks and constraints. Addressing one does not require dismissing another.',sources:['menfem']},
 {claim:'“Patriarchy means every individual man has an easy life.”',answer:'No. It is a framework for analyzing broad power patterns. Income, race, disability, geography and other factors influence individual experiences.',sources:['menfem']},
 {claim:'“The gender pay gap means every woman is paid less for the same job.”',answer:'Not necessarily. Aggregate gaps are averages across jobs and people. Their causes require research, and unequal pay for equivalent work is a distinct issue.',sources:['equalwork','unpaid']},
 {claim:'“Good intentions mean I cannot cause harm.”',answer:'Impact and intent are different questions. Good intentions matter, but they do not remove the need to listen, repair and change behavior.',sources:['menengage']},
 {claim:'“If no one said ‘no,’ it was consensual.”',answer:'No. Silence, lack of resistance, prior intimacy and flirting are not reliable consent. Seek clear, freely given ongoing agreement.',sources:['rainn']},
 {claim:'“An ally must publicly confront every inappropriate comment.”',answer:'No. Quiet correction, distraction, checking in and getting help can be more effective and safer than confrontation.',sources:['cdc','bystander']},
 {claim:'“An apology should mean the person forgives me.”',answer:'No. Accountability means acknowledging and changing harmful conduct. The affected person may choose distance or boundaries.',sources:['menengage']},
 {claim:'“Equality means everybody has to be identical.”',answer:'No. Equality concerns fair rights, dignity, agency and opportunities, not identical interests, choices or experiences.',sources:['ungei']}
];
const EG_GLOSSARY = [
 ['Feminism','Movements, theories and commitments aimed at gender equality and addressing gender injustice.'],
 ['Equality','Fair rights, dignity, treatment and opportunity; not a demand that everyone be identical.'],
 ['Equity','Addressing barriers and differences in circumstances so people have fair access and outcomes can be evaluated fairly.'],
 ['Sexism','Prejudice, stereotyping or discrimination connected to sex or gender.'],
 ['Patriarchy','A framework describing social systems that historically concentrate power among men and privilege masculine norms.'],
 ['Misogyny','Contempt, hostility or prejudice directed at women or girls.'],
 ['Gender stereotype','An assumption about someone’s roles, abilities or interests based on gender.'],
 ['Gender identity','A person’s internally experienced sense of gender, which may or may not correspond with sex assigned at birth.'],
 ['Sex assigned at birth','Classification made at birth, generally based on visible physical characteristics; distinct from gender identity.'],
 ['Intersectionality','A lens for understanding how overlapping social structures shape distinct experiences of advantage and disadvantage.'],
 ['Privilege','An unearned relative advantage in a particular context; not a claim that someone’s life is easy.'],
 ['Consent','Freely given, informed and ongoing agreement to a specific activity.'],
 ['Coercion','Pressuring or controlling someone through threats, manipulation, intimidation or other constraints on choice.'],
 ['Bystander intervention','Safe actions to interrupt harm, recruit help, check in or provide support.'],
 ['Emotional labor','Work involved in managing feelings or relationships; distinct from, though related to, household planning work.'],
 ['Mental load','The often-invisible work of anticipating, planning, remembering and coordinating responsibilities.'],
 ['Accountability','Taking responsibility for actions and their effects, making amends when appropriate and changing behavior.'],
 ['Allyship','Ongoing action by someone who supports fairness for a group to which they may not belong.'],
 ['Sexual harassment','Unwelcome sex-based conduct; legal definitions and thresholds vary by location and context.'],
 ['Coercive control','A pattern of domination that may involve isolation, threats, monitoring or financial restrictions.']
];
const EG_TASKS = [
 {id:'fifteen',group:'This week',label:'Read how coercive control differs from ordinary disagreement.',lesson:'power'},
 {id:'sixteen',group:'This week',label:'Practice pausing an argument without threats, punishment or intimidation.',lesson:'listening'},
 {id:'seventeen',group:'This month',label:'Choose one advocacy observance and plan a grounded action.',lesson:'allyship'},
 {id:'one',group:'Today',label:'Read the foundational lesson on what feminism means.',lesson:'foundations'},
 {id:'two',group:'Today',label:'Notice one assumption you make about a person based on gender.',lesson:'power'},
 {id:'three',group:'Today',label:'Practice listening without immediately defending your intention.',lesson:'listening'},
 {id:'four',group:'This week',label:'Ask someone what respectful support looks like to them—without pressuring them to teach you.',lesson:'listening'},
 {id:'five',group:'This week',label:'Map household responsibilities, including planning and remembering.',lesson:'care'},
 {id:'six',group:'This week',label:'Practice a consent and boundaries check-in.',lesson:'consent'},
 {id:'seven',group:'This week',label:'Credit someone accurately for an idea or contribution.',lesson:'work'},
 {id:'eight',group:'This week',label:'Choose a safe response to a disrespectful joke or comment.',lesson:'bystander'},
 {id:'nine',group:'This week',label:'Read one first-person account from a woman with a different life experience.',lesson:'intersectionality'},
 {id:'ten',group:'This month',label:'Review who makes decisions and whose time is valued in your circles.',lesson:'power'},
 {id:'eleven',group:'This month',label:'Explore how rigid expectations limit men’s emotional lives.',lesson:'masculinity'},
 {id:'twelve',group:'This month',label:'Finish the knowledge check and review explanations, not just your score.',lesson:'foundations'},
 {id:'thirteen',group:'This month',label:'Make one specific, sustainable change to your household or workplace habits.',lesson:'allyship'},
 {id:'fourteen',group:'This month',label:'Revisit feedback you received and notice what behavior actually changed.',lesson:'allyship'}
];

const FS_FILMS = [
 {
  "id": "katz",
  "title": "Violence against women — it’s a men’s issue",
  "creator": "Jackson Katz · TEDxFiDiWomen",
  "type": "Talk",
  "duration": "17 min",
  "description": "Why preventing gender-based violence requires men to question harmful norms, intervene, and speak up.",
  "url": "https://www.ted.com/talks/jackson_katz_violence_against_women_it_s_a_men_s_issue",
  "category": "Men & masculinity",
  "embed": "https://www.youtube-nocookie.com/embed/ElJxUVJ8blw",
  "poster": "https://i.ytimg.com/vi/ElJxUVJ8blw/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "feminists",
  "title": "We should all be feminists",
  "creator": "Chimamanda Ngozi Adichie · TEDxEuston",
  "type": "Talk",
  "duration": "30 min",
  "description": "An approachable introduction to feminism, equality, and the expectations society places on women and men.",
  "url": "https://www.ted.com/talks/chimamanda_ngozi_adichie_we_should_all_be_feminists",
  "category": "Start here",
  "embed": "https://www.youtube-nocookie.com/embed/hg3umXU_qWc",
  "poster": "https://i.ytimg.com/vi/hg3umXU_qWc/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "mask",
  "title": "The Mask You Live In — trailer",
  "creator": "The Representation Project",
  "type": "Documentary trailer",
  "duration": "Trailer",
  "description": "A preview exploring restrictive ideas of manhood and how boys are taught to hide emotions.",
  "url": "https://www.youtube.com/watch?v=hc45-ptHMxo",
  "category": "Men & masculinity",
  "embed": "https://www.youtube-nocookie.com/embed/hc45-ptHMxo",
  "poster": "https://i.ytimg.com/vi/hc45-ptHMxo/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "heforshe",
  "title": "HeForShe: gender equality is your issue, too",
  "creator": "Emma Watson · United Nations",
  "type": "Speech",
  "duration": "13 min",
  "description": "A direct invitation for men and boys to support gender equality and challenge limiting expectations.",
  "url": "https://www.youtube.com/watch?v=gkjW9PZBRfk",
  "category": "Start here",
  "embed": "https://www.youtube-nocookie.com/embed/gkjW9PZBRfk",
  "poster": "https://i.ytimg.com/vi/gkjW9PZBRfk/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "nyamayaro",
  "title": "An invitation to men who want a better world for women",
  "creator": "Elizabeth Nyamayaro · TEDWomen",
  "type": "Talk",
  "duration": "12 min",
  "description": "What solidarity can look like when men participate meaningfully in equality work.",
  "url": "https://www.ted.com/talks/elizabeth_nyamayaro_an_invitation_to_men_who_want_a_better_world_for_women",
  "category": "Start here",
  "embed": "https://www.youtube-nocookie.com/embed/VekRvcbL4yk",
  "poster": "https://i.ytimg.com/vi/VekRvcbL4yk/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "porter",
  "title": "A call to men",
  "creator": "Tony Porter · TEDWomen",
  "type": "Talk",
  "duration": "11 min",
  "description": "The “man box,” the pressures men face, and how we can break patterns that harm others.",
  "url": "https://www.ted.com/talks/tony_porter_a_call_to_men",
  "category": "Men & masculinity",
  "embed": "https://embed.ted.com/talks/tony_porter_a_call_to_men",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "davonte",
  "title": "A new vision of healthy masculinity",
  "creator": "Davonte Green · TEDxInglewood",
  "type": "Talk",
  "duration": "Talk",
  "description": "Emotional intelligence and self-control as alternatives to aggressive stereotypes of manhood.",
  "url": "https://www.ted.com/talks/davonte_green_a_new_vision_of_healthy_masculinity",
  "category": "Men & masculinity",
  "embed": "https://embed.ted.com/talks/davonte_green_a_new_vision_of_healthy_masculinity",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "jocelyn",
  "title": "Healthy masculinity: the power of men’s personal stories",
  "creator": "Jocelyn Lehrer · TEDxIndianaUniversity",
  "type": "Talk",
  "duration": "Talk",
  "description": "How personal storytelling can challenge gender expectations and encourage healthier relationships.",
  "url": "https://www.ted.com/talks/jocelyn_lehrer_healthy_masculinity_the_power_of_men_s_personal_stories",
  "category": "Men & masculinity",
  "embed": "https://embed.ted.com/talks/jocelyn_lehrer_healthy_masculinity_the_power_of_men_s_personal_stories",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "steiner",
  "title": "Why domestic violence victims don’t leave",
  "creator": "Leslie Morgan Steiner · TEDxRainier",
  "type": "Survivor talk",
  "duration": "16 min",
  "description": "A survivor explains coercive control, the realities of abuse, and why victim-blaming misses the point.",
  "url": "https://www.ted.com/talks/leslie_morgan_steiner_why_domestic_violence_victims_don_t_leave",
  "category": "Violence & safety",
  "embed": "https://embed.ted.com/talks/leslie_morgan_steiner_why_domestic_violence_victims_don_t_leave",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "marianne",
  "title": "The power of us: how we stop sexual harassment",
  "creator": "Marianne Cooper · TEDxUniversityofNevada",
  "type": "Research talk",
  "duration": "Talk",
  "description": "How harassment is enabled by social conditions and what communities can do to prevent it.",
  "url": "https://www.ted.com/talks/marianne_cooper_the_power_of_us_how_we_stop_sexual_harassment",
  "category": "Consent & prevention",
  "embed": "https://embed.ted.com/talks/marianne_cooper_the_power_of_us_how_we_stop_sexual_harassment",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "consent",
  "title": "Consent — it’s as simple as tea",
  "creator": "Thames Valley Police",
  "type": "Short film",
  "duration": "~3 min",
  "description": "An accessible animated analogy for freely given, ongoing consent. Watch on the police publisher page.",
  "url": "https://www.thamesvalley.police.uk/police-forces/thames-valley-police/areas/c/2017/consent-is-everything/",
  "category": "Consent & prevention",
  "embed": "",
  "poster": "",
  "externalOnly": true
 },
 {
  "id": "roxane",
  "title": "Confessions of a bad feminist",
  "creator": "Roxane Gay · TEDWomen",
  "type": "Talk",
  "duration": "11 min",
  "description": "How to embrace imperfect learning and meaningful small choices without demanding perfection.",
  "url": "https://www.ted.com/talks/roxane_gay_confessions_of_a_bad_feminist",
  "category": "Start here",
  "embed": "https://embed.ted.com/talks/roxane_gay_confessions_of_a_bad_feminist",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "sheryl",
  "title": "Why we have too few women leaders",
  "creator": "Sheryl Sandberg · TEDWomen",
  "type": "Talk",
  "duration": "15 min",
  "description": "A perspective on barriers and expectations facing women in leadership.",
  "url": "https://www.ted.com/talks/sheryl_sandberg_why_we_have_too_few_women_leaders",
  "category": "Work & equality",
  "embed": "https://embed.ted.com/talks/sheryl_sandberg_why_we_have_too_few_women_leaders",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "crenshaw",
  "title": "The urgency of intersectionality",
  "creator": "Kimberlé Crenshaw · TEDWomen",
  "type": "Talk",
  "duration": "19 min",
  "description": "Understanding how multiple forms of discrimination intersect and why that changes what justice requires.",
  "url": "https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality",
  "category": "Intersectionality",
  "embed": "https://www.youtube-nocookie.com/embed/akOe5-UsQ2o",
  "poster": "https://i.ytimg.com/vi/akOe5-UsQ2o/hqdefault.jpg",
  "externalOnly": false
 },
 {
  "id": "single-story",
  "title": "The danger of a single story",
  "creator": "Chimamanda Ngozi Adichie · TEDGlobal",
  "type": "Talk",
  "duration": "19 min",
  "description": "Why stereotypes flourish when we treat a person or group as if they have only one story.",
  "url": "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story",
  "category": "Intersectionality",
  "embed": "https://embed.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "lewin",
  "title": "The price of shame",
  "creator": "Monica Lewinsky · TED",
  "type": "Talk",
  "duration": "22 min",
  "description": "A firsthand exploration of public humiliation and the human costs of online harassment.",
  "url": "https://www.ted.com/talks/monica_lewinsky_the_price_of_shame",
  "category": "Digital respect",
  "embed": "https://embed.ted.com/talks/monica_lewinsky_the_price_of_shame",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "sophia",
  "title": "Speak Up",
  "creator": "Sophia Roy · TEDxChelmsfordHS",
  "type": "Talk",
  "duration": "Talk",
  "description": "A young woman discusses sexism in workplaces and ways to respond to unfair treatment.",
  "url": "https://www.ted.com/talks/sophia_roy_speak_up",
  "category": "Work & equality",
  "embed": "https://embed.ted.com/talks/sophia_roy_speak_up",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "soler",
  "title": "How we turned the tide on domestic violence",
  "creator": "Esta Soler · TEDWomen",
  "type": "Talk",
  "duration": "11 min",
  "description": "Lessons from advocacy, law, and grassroots change in the fight against domestic violence.",
  "url": "https://www.ted.com/talks/esta_soler_how_we_turned_the_tide_on_domestic_violence_hint_the_polaroid_helped",
  "category": "Violence & safety",
  "embed": "https://embed.ted.com/talks/esta_soler_how_we_turned_the_tide_on_domestic_violence_hint_the_polaroid_helped",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "headlee",
  "title": "10 ways to have a better conversation",
  "creator": "Celeste Headlee · TEDxCreativeCoast",
  "type": "Skills talk",
  "duration": "11 min",
  "description": "A practical listening guide for discussions where people need to be heard rather than interrupted.",
  "url": "https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation",
  "category": "Communication",
  "embed": "https://embed.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation",
  "poster": "",
  "externalOnly": false
 },
 {
  "id": "ronson",
  "title": "When online shaming goes too far",
  "creator": "Jon Ronson · TED",
  "type": "Talk",
  "duration": "17 min",
  "description": "What happens when social media pile-ons turn mistakes into life-altering public humiliation.",
  "url": "https://www.ted.com/talks/jon_ronson_when_online_shaming_goes_too_far",
  "category": "Digital respect",
  "embed": "https://embed.ted.com/talks/jon_ronson_when_online_shaming_goes_too_far",
  "poster": "",
  "externalOnly": false
 }
];
const FS_FEATURED_IDS = ["katz", "feminists", "heforshe", "nyamayaro", "crenshaw", "mask"];
const FS_HOME_FILMS = FS_FEATURED_IDS.map(id=>FS_FILMS.find(f=>f.id===id)).filter(Boolean);
/* Femscape — responsive, standalone app controller. */
(function(){
'use strict';

const FS_RESOURCES=[
 {
  "category": "Understanding feminism",
  "title": "UN Women — Women’s rights history",
  "org": "UN Women",
  "kind": "History",
  "format": "Timeline",
  "url": "https://interactive.unwomen.org/multimedia/timeline/womenunite/en/index.html",
  "description": "A global history of women’s organizing, rights and change."
 },
 {
  "category": "Understanding feminism",
  "title": "UN Women — Gender equality",
  "org": "UN Women",
  "kind": "Research",
  "format": "Overview",
  "url": "https://www.unwomen.org/en",
  "description": "International data, policy and women-led initiatives."
 },
 {
  "category": "Understanding feminism",
  "title": "UN Women — Beijing Declaration",
  "org": "UN Women",
  "kind": "History",
  "format": "Framework",
  "url": "https://www.unwomen.org/en/how-we-work/intergovernmental-support/world-conferences-on-women",
  "description": "Background on international women’s conferences and the Beijing agenda."
 },
 {
  "category": "Understanding feminism",
  "title": "UN — SDG 5",
  "org": "United Nations",
  "kind": "Research",
  "format": "Data",
  "url": "https://unstats.un.org/sdgs/report/2024/Goal-05/",
  "description": "Data on education, representation, care work, discrimination and equality."
 },
 {
  "category": "Understanding feminism",
  "title": "National Park Service — Women’s suffrage",
  "org": "National Park Service",
  "kind": "History",
  "format": "Article",
  "url": "https://www.nps.gov/articles/introduction-women-s-suffrage.htm",
  "description": "Complex history of voting rights and who remained excluded."
 },
 {
  "category": "Violence & safety",
  "title": "WHO — Violence against women estimates",
  "org": "WHO",
  "kind": "Research",
  "format": "Report",
  "url": "https://www.who.int/news/item/19-11-2025-lifetime-toll--840-million-women-faced-partner-or-sexual-violence",
  "description": "Prevalence, methods and limitations for 2025 estimates."
 },
 {
  "category": "Violence & safety",
  "title": "CDC — Risk and protective factors",
  "org": "CDC",
  "kind": "Research",
  "format": "Guidance",
  "url": "https://www.cdc.gov/intimate-partner-violence/risk-factors/index.html",
  "description": "Multi-level framework for IPV perpetration and prevention."
 },
 {
  "category": "Violence & safety",
  "title": "CDC — Prevention strategies",
  "org": "CDC",
  "kind": "Practice",
  "format": "Guidance",
  "url": "https://www.cdc.gov/intimate-partner-violence/prevention/index.html",
  "description": "Community- and relationship-level prevention approaches."
 },
 {
  "category": "Violence & safety",
  "title": "UN Women / UNODC — Femicide report",
  "org": "UN Women / UNODC",
  "kind": "Research",
  "format": "Report",
  "url": "https://chile.unwomen.org/en/digital-library/publications/2025/11/femicides-in-2024-global-estimates-of-intimate-partner-family-member-femicides",
  "description": "Women killed by partners or family members: 2024 statistics."
 },
 {
  "category": "Violence & safety",
  "title": "The Hotline — Recognize abuse",
  "org": "National Domestic Violence Hotline",
  "kind": "Support",
  "format": "Guide",
  "url": "https://www.thehotline.org/resources/healthy-relationships/",
  "description": "Recognize coercive control, coercion, isolation and threats."
 },
 {
  "category": "Violence & safety",
  "title": "The Hotline — Get help",
  "org": "National Domestic Violence Hotline",
  "kind": "Support",
  "format": "Service",
  "url": "https://www.thehotline.org/get-help/",
  "description": "Confidential US domestic violence help and safety planning."
 },
 {
  "category": "Violence & safety",
  "title": "The Hotline — Communicating with an abuser",
  "org": "National Domestic Violence Hotline",
  "kind": "Support",
  "format": "Guide",
  "url": "https://www.thehotline.org/resources/how-can-i-talk-to-my-abuser/",
  "description": "Why better explanations from a survivor cannot solve abusive control."
 },
 {
  "category": "Violence & safety",
  "title": "The Hotline — Couples counseling warning",
  "org": "National Domestic Violence Hotline",
  "kind": "Support",
  "format": "Guide",
  "url": "https://www.thehotline.org/resources/should-i-go-to-couples-therapy-with-my-abusive-partner/",
  "description": "Safety guidance on therapy in an abusive relationship."
 },
 {
  "category": "Violence & safety",
  "title": "RAINN — Sexual assault support",
  "org": "RAINN",
  "kind": "Support",
  "format": "Service",
  "url": "https://rainn.org",
  "description": "Sexual violence prevention, services and survivor support."
 },
 {
  "category": "Relationships & men",
  "title": "love is respect",
  "org": "love is respect",
  "kind": "Practice",
  "format": "Guide",
  "url": "https://www.loveisrespect.org/",
  "description": "Dating violence prevention, warning signs and relationship education."
 },
 {
  "category": "Relationships & men",
  "title": "MenEngage Alliance",
  "org": "MenEngage Alliance",
  "kind": "Practice",
  "format": "Framework",
  "url": "https://menengage.org/",
  "description": "Working with men and boys on gender justice and accountability."
 },
 {
  "category": "Relationships & men",
  "title": "The Hotline — Healthy relationships",
  "org": "National Domestic Violence Hotline",
  "kind": "Practice",
  "format": "Guide",
  "url": "https://www.thehotline.org/resources/healthy-relationships/",
  "description": "Communication, boundaries, autonomy and safety."
 },
 {
  "category": "Relationships & men",
  "title": "Jackson Katz — TED talk",
  "org": "TED",
  "kind": "Video",
  "format": "Talk",
  "url": "https://www.ted.com/talks/jackson_katz_violence_against_women_it_s_a_men_s_issue",
  "description": "Why preventing violence against women involves men."
 },
 {
  "category": "Work & opportunity",
  "title": "EEOC — Sex discrimination",
  "org": "U.S. EEOC",
  "kind": "Law",
  "format": "Guidance",
  "url": "https://www.eeoc.gov/sex-based-discrimination",
  "description": "U.S. workplace protections and complaint information."
 },
 {
  "category": "Work & opportunity",
  "title": "UN — Equal Pay Day",
  "org": "United Nations",
  "kind": "Research",
  "format": "Explainer",
  "url": "https://www.un.org/en/observances/equal-pay-day",
  "description": "Context for equal pay and workforce pay gaps."
 },
 {
  "category": "Work & opportunity",
  "title": "UN — Women & girls in science",
  "org": "United Nations",
  "kind": "Research",
  "format": "Overview",
  "url": "https://www.un.org/en/observances/women-and-girls-in-science-day",
  "description": "Women’s participation and access in science and technology."
 },
 {
  "category": "Learning & action",
  "title": "UN — International observances",
  "org": "United Nations",
  "kind": "Events",
  "format": "Calendar",
  "url": "https://www.un.org/en/observances/list-days-weeks",
  "description": "Official dates to plan learning and advocacy."
 },
 {
  "category": "Learning & action",
  "title": "UN Women — 16 Days of Activism",
  "org": "UN Women",
  "kind": "Events",
  "format": "Campaign",
  "url": "https://chile.unwomen.org/en/what-we-do/ending-violence-against-women/unite/theme",
  "description": "Campaign themes and action ideas for November 25–December 10."
 },
 {
  "category": "Learning & action",
  "title": "UN — International Women’s Day",
  "org": "United Nations",
  "kind": "Events",
  "format": "Campaign",
  "url": "https://www.un.org/en/observances/womens-day",
  "description": "Official annual March 8 resources."
 },
 {
  "category": "Learning & action",
  "title": "RAINN — Support survivors",
  "org": "RAINN",
  "kind": "Support",
  "format": "Donation",
  "url": "https://rainn.org/give-to-rainn",
  "description": "Contribute directly to a survivor-support nonprofit."
 }
];
const FS_HISTORY=[
 {
  "year": "1848",
  "title": "Seneca Falls Convention",
  "description": "An important public U.S. women’s rights convention called for political and social equality, including suffrage. Earlier women’s activism and non-US movements also mattered.",
  "url": "https://www.nps.gov/articles/introduction-women-s-suffrage.htm",
  "category": "Organizing"
 },
 {
  "year": "1920",
  "title": "Nineteenth Amendment",
  "description": "The U.S. barred denying voting rights on the basis of sex. Racist barriers continued to block many women of color from voting.",
  "url": "https://www.nps.gov/articles/introduction-women-s-suffrage.htm",
  "category": "Political rights"
 },
 {
  "year": "1945–46",
  "title": "International rights framework",
  "description": "The United Nations Charter affirmed equal rights of men and women; the Commission on the Status of Women followed in 1946.",
  "url": "https://interactive.unwomen.org/multimedia/timeline/womenunite/en/index.html",
  "category": "Global action"
 },
 {
  "year": "1964",
  "title": "U.S. Civil Rights Act",
  "description": "Title VII prohibited sex discrimination in covered employment, alongside other protected categories.",
  "url": "https://www.nps.gov/articles/civil-rights-act.htm",
  "category": "Work"
 },
 {
  "year": "1979",
  "title": "CEDAW adopted",
  "description": "The UN General Assembly adopted the Convention on the Elimination of All Forms of Discrimination against Women.",
  "url": "https://chile.unwomen.org/en/csw/brief-history",
  "category": "Global action"
 },
 {
  "year": "1993",
  "title": "Violence recognized in international law",
  "description": "The UN Declaration on the Elimination of Violence against Women recognized and defined forms of gender-based violence.",
  "url": "https://interactive.unwomen.org/multimedia/timeline/womenunite/en/index.html",
  "category": "Safety"
 },
 {
  "year": "1995",
  "title": "Beijing Platform for Action",
  "description": "Governments adopted a broad global framework for advancing women’s rights at the Fourth World Conference on Women.",
  "url": "https://interactive.unwomen.org/multimedia/timeline/womenunite/en/index.html",
  "category": "Global action"
 },
 {
  "year": "2025",
  "title": "Current evidence, unfinished work",
  "description": "WHO and UN partners reported nearly one in three women had experienced specified forms of partner or sexual violence over a lifetime.",
  "url": "https://www.who.int/news/item/19-11-2025-lifetime-toll--840-million-women-faced-partner-or-sexual-violence",
  "category": "Evidence"
 }
];
const FS_EVENTS=[
 {
  "month": 1,
  "day": 25,
  "title": "Women in Multilateralism Day",
  "category": "Leadership",
  "description": "Recognize women shaping international cooperation.",
  "url": "https://www.un.org/en/global-issues/gender-equality"
 },
 {
  "month": 2,
  "day": 6,
  "title": "Zero Tolerance for Female Genital Mutilation",
  "category": "Violence prevention",
  "description": "Learn about prevention and survivor-centered approaches.",
  "url": "https://www.un.org/en/observances/list-days-weeks"
 },
 {
  "month": 2,
  "day": 11,
  "title": "Women and Girls in Science",
  "category": "Education",
  "description": "Share the work of women scientists; discuss barriers in STEM.",
  "url": "https://www.un.org/en/observances/women-and-girls-in-science-day"
 },
 {
  "month": 3,
  "day": 8,
  "title": "International Women’s Day",
  "category": "Equality",
  "description": "Join evidence-led discussions, community action and reflection.",
  "url": "https://www.un.org/en/observances/womens-day"
 },
 {
  "month": 3,
  "day": 10,
  "title": "International Day of Women Judges",
  "category": "Leadership",
  "description": "Highlight women’s work in the legal profession.",
  "url": "https://www.un.org/en/global-issues/gender-equality"
 },
 {
  "month": 6,
  "day": 19,
  "title": "Elimination of Sexual Violence in Conflict",
  "category": "Violence prevention",
  "description": "Learn about survivor-centered responses in conflict settings.",
  "url": "https://www.un.org/en/observances/list-days-weeks"
 },
 {
  "month": 6,
  "day": 23,
  "title": "International Widows’ Day",
  "category": "Equality",
  "description": "Learn about widows’ rights and barriers in different societies.",
  "url": "https://www.un.org/en/observances/list-days-weeks"
 },
 {
  "month": 6,
  "day": 24,
  "title": "Women in Diplomacy Day",
  "category": "Leadership",
  "description": "Amplify women’s role in diplomacy and peace processes.",
  "url": "https://www.un.org/en/observances/women-in-diplomacy-day"
 },
 {
  "month": 9,
  "day": 18,
  "title": "International Equal Pay Day",
  "category": "Equality",
  "description": "Discuss equal pay for work of equal value and the wider pay gap.",
  "url": "https://www.un.org/en/observances/equal-pay-day"
 },
 {
  "month": 10,
  "day": 11,
  "title": "International Day of the Girl Child",
  "category": "Education",
  "description": "Support girls’ education, dignity, safety and opportunity.",
  "url": "https://www.un.org/en/observances/list-days-weeks"
 },
 {
  "month": 10,
  "day": 15,
  "title": "International Day of Rural Women",
  "category": "Equality",
  "description": "Learn about rural women’s work, rights and services.",
  "url": "https://www.un.org/en/observances/list-days-weeks"
 },
 {
  "month": 11,
  "day": 25,
  "title": "Elimination of Violence against Women",
  "category": "Violence prevention",
  "description": "Begin the annual 16 Days of Activism and support survivors.",
  "url": "https://www.un.org/en/observances/ending-violence-against-women-day/"
 },
 {
  "month": 12,
  "day": 10,
  "title": "Human Rights Day",
  "category": "Global action",
  "description": "Close the 16 Days of Activism by committing to continued work.",
  "url": "https://www.un.org/observances/human-rights-day"
 }
];

function startFemscape(){
const $ = (s,root=document) => root.querySelector(s);
const escapeHTML = v => String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const source = id => EG_SOURCES.find(x=>x.id===id);
const lesson = id => EG_LESSONS.find(x=>x.id===id);
const STORAGE_KEY='equal-ground-progress-v1' // Retained for upgrade compatibility;
function readSaved(){try{const d=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');return d&&typeof d==='object'?d:{}}catch(e){return {}}}
const persisted=readSaved();
const state={route:'home',item:'',completed:Array.isArray(persisted.completed)?persisted.completed.filter(x=>lesson(x)):[],tasks:Array.isArray(persisted.tasks)?persisted.tasks.filter(x=>EG_TASKS.some(t=>t.id===x)):[],bestScore:Number.isInteger(persisted.bestScore)?Math.max(0,Math.min(EG_QUIZ.length,persisted.bestScore)):null,search:'',quizIndex:0,quizAnswers:{},quizDone:false,scenarioAnswers:{},mobileOpen:false};
const root=$('#eg-app'), screen=$('#eg-screen');if(!root||!screen)return;
let lastFilmTrigger=null;
let fsHomeFilmIndex=0;
let fsFilmCategory="All";
let fsFilmSearch="";
let fsResourceQuery='';
let fsResourceCategory='All';
let fsResourceKind='All';
let fsHistoryCategory='All';
let fsCalendarCategory='All';
let fsCalendarMonth=new Date().getMonth();
let fsCalendarYear=new Date().getFullYear();
// WHO 2025: annual number of women affected (not an incident log). At ~10/sec,
// each value remains on screen for about 100ms; no 10-at-a-time increments.
// performance.now() is monotonic, so changing the system clock cannot alter the rate.
const EG_COUNTER_STARTED_AT = performance.now();
const EG_ANNUAL_EQUIVALENT_PER_SEC = 316000000/(365.25*24*60*60);
const egCounterFormat = new Intl.NumberFormat('en-US');
let egLastVisibleCount=-1;
function updateImpactCounter(now=performance.now()){
  const n=$('#eg-impact-value');if(!n)return;
  const elapsed=Math.max(0,(now-EG_COUNTER_STARTED_AT)/1000);
  const value=Math.floor(elapsed*EG_ANNUAL_EQUIVALENT_PER_SEC);
  if(value!==egLastVisibleCount){n.textContent=egCounterFormat.format(value);egLastVisibleCount=value;}
}
function animateImpactCounter(now){updateImpactCounter(now);requestAnimationFrame(animateImpactCounter);}

const save=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:state.completed,tasks:state.tasks,bestScore:state.bestScore}))}catch(e){/* app remains usable if storage is disabled */}};
const pc=()=>Math.round(100*state.completed.length/EG_LESSONS.length);
const icons={home:'◈',learn:'▤',practice:'◎',films:'▷',quiz:'✦',myths:'?',glossary:'Aa',sources:'↗',plan:'✓',help:'+',about:'i'};
const menu=[['home','Overview'],['learn','Learning path'],['practice','Practice lab'],['films','Films & talks'],['quiz','Knowledge check'],['myths','Common questions'],['glossary','Glossary'],['sources','Evidence library'],['plan','Action plan']];
function sourceLinks(ids){return `<div class="eg-source-chips">${ids.map(id=>{const s=source(id);return s?`<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" class="eg-source-chip" aria-label="Read source: ${escapeHTML(s.org)}">${escapeHTML(s.org)} <span aria-hidden="true">↗</span></a>`:''}).join('')}</div>`}
function eyebrow(text){return `<div class="eg-eyebrow"><span class="eg-dot"></span>${escapeHTML(text)}</div>`}
function intro(title,summary,tag){return `<header class="eg-page-head">${eyebrow(tag||'LEARN • REFLECT • PRACTICE')}<h1>${escapeHTML(title)}</h1><p>${escapeHTML(summary)}</p></header>`}
function button(text,route,id='',cls='eg-btn eg-btn-dark'){return `<button type="button" class="${cls}" data-route="${route}" ${id?`data-id="${escapeHTML(id)}"`:''}>${escapeHTML(text)} <span aria-hidden="true">→</span></button>`}
function masterSheetDownloads(compact=false){
 const introText=compact?'Bring an evidence-linked, printable reference to a discussion or live stream.':'A printable live discussion and debate master sheet covering 15 topic areas, with source links under the claims. Useful as a quick-reference handout; always confirm dates, definitions and scope before citing.';
 return `<section class="eg-panel fs-master-download" aria-labelledby="fs-master-download-title"><div class="fs-master-download-mark" aria-hidden="true">▤</div><div class="fs-master-download-copy"><div class="eg-kicker">FREE DOWNLOAD · PRINTABLE REFERENCE</div><h2 id="fs-master-download-title">Feminism Master Debate Sheet</h2><p>${introText}</p><div class="fs-master-download-actions"><a class="eg-btn eg-btn-dark" href="docs/feminism_master_sheet.pdf" download="Femscape-Feminism-Master-Debate-Sheet.pdf" type="application/pdf">↓ Download PDF</a><a class="eg-btn eg-btn-outline" href="docs/feminism_master_sheet.docx" download="Femscape-Feminism-Master-Debate-Sheet.docx" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document">↓ Editable Word version</a></div></div></section>`;
}
function nextLesson(){return EG_LESSONS.find(l=>!state.completed.includes(l.id))||EG_LESSONS[0]}
function statCard(num,label,desc,sourceid){return `<div class="eg-stat-card"><div class="eg-stat-number">${num}</div><h3>${label}</h3><p>${desc}</p>${sourceLinks([sourceid])}</div>`}
function homeCinema(){
 const current=FS_HOME_FILMS[fsHomeFilmIndex];
 const position=String(fsHomeFilmIndex+1).padStart(2,'0');
 return `<section class="fs-cinema" id="fs-home-cinema" aria-labelledby="fs-cinema-heading">
  <div class="fs-cinema-heading"><div><div class="fs-cinema-kicker">ESSENTIAL VIEWING <span aria-hidden="true">·</span> WATCH. REFLECT. ACT.</div><h2 id="fs-cinema-heading">Watch. Then decide.</h2><p>Hear the experiences and perspectives behind the evidence. Start with one of these six selected films, or explore all 20 talks, documentaries and learning videos.</p></div>${button('Explore all films','films','','eg-btn eg-btn-outline')}</div>
  <div class="fs-cinema-stage" aria-label="Featured video">
   <div class="fs-cinema-copy"><div class="fs-cinema-number">FEATURED ${position} / ${String(FS_HOME_FILMS.length).padStart(2,'0')} <span>·</span> ${escapeHTML(current.type)} <span>·</span> ${escapeHTML(current.duration)}</div><h3>${escapeHTML(current.title)}</h3><p>${escapeHTML(current.description)}</p><div class="fs-cinema-attribution">${escapeHTML(current.creator)}</div><div class="fs-cinema-actions"><button type="button" class="fs-cinema-watch" data-action="film" data-id="${escapeHTML(current.id)}"><span aria-hidden="true">▶</span> Watch in lightbox</button><a href="${escapeHTML(current.url)}" target="_blank" rel="noopener noreferrer">Original video ↗</a></div></div>
   <button type="button" class="fs-cinema-poster" data-action="film" data-id="${escapeHTML(current.id)}" aria-label="Watch ${escapeHTML(current.title)} in lightbox"><img src="${escapeHTML(current.poster)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span class="fs-cinema-poster-shade" aria-hidden="true"></span><span class="fs-cinema-poster-label" aria-hidden="true">${escapeHTML(current.creator)}</span><span class="fs-cinema-large-play" aria-hidden="true">▶</span><span class="fs-cinema-poster-caption" aria-hidden="true">PLAY FEATURED FILM</span></button>
  </div>
  <div class="fs-cinema-controls" aria-label="Choose a featured film"><button type="button" class="fs-cinema-arrow" data-action="home-film-prev" aria-label="Previous featured film">←</button><div class="fs-cinema-tabs">${FS_HOME_FILMS.map((f,i)=>`<button type="button" class="fs-cinema-tab ${i===fsHomeFilmIndex?'is-active':''}" data-action="home-film-select" data-index="${i}" aria-pressed="${i===fsHomeFilmIndex?'true':'false'}">${escapeHTML(f.title)}</button>`).join('')}</div><button type="button" class="fs-cinema-arrow" data-action="home-film-next" aria-label="Next featured film">→</button></div>
  <div class="fs-cinema-thumbs" aria-label="Watch a film">${FS_HOME_FILMS.map((f,i)=>`<button type="button" class="fs-cinema-thumb ${i===fsHomeFilmIndex?'is-active':''}" data-action="film" data-id="${escapeHTML(f.id)}" aria-label="Play ${escapeHTML(f.title)}"><img src="${escapeHTML(f.poster)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span aria-hidden="true">▶</span><small>${escapeHTML(f.title)}</small></button>`).join('')}</div>
  <p class="fs-cinema-library-count">6 featured · 20 in the full library · New topics: consent, workplace, healthy masculinity and digital respect</p><p class="fs-cinema-disclaimer">Content note: some films discuss abuse and violence. Nothing autoplays; video loads only after you choose to watch. Third-party playback requires internet access. <button type="button" data-route="films">Browse all films →</button></p>
 </section>`;
}
function switchHomeFilm(index, action='home-film-select'){
 fsHomeFilmIndex=(index+FS_HOME_FILMS.length)%FS_HOME_FILMS.length;
 const old=$('#fs-home-cinema');if(!old)return;
 old.outerHTML=homeCinema();
 const target=$(`[data-action="${action}"]${action==='home-film-select'?`[data-index="${fsHomeFilmIndex}"]`:''}`,$('#fs-home-cinema'));
 if(target)target.focus({preventScroll:true});
}

function home(){const next=nextLesson();return `
<section class="eg-hero">
 <div class="eg-hero-copy">${eyebrow('A CALL TO ACTION FOR MEN')}<h1>What you ignore <em>doesn't disappear.</em></h1><p>Gender inequality has real consequences. Understand the evidence, question what you were taught, recognize harmful patterns, and take responsibility for what you do next—at home, at work, and in public.</p><div class="eg-hero-actions">${button('Understand the issue','learn',next.id,'eg-btn eg-btn-light')}${button('Practice speaking up','practice','','eg-btn eg-btn-ghost-light')}</div><div class="eg-hero-foot"><span aria-hidden="true">✦</span> You don't need to know everything to start making a difference.</div></div>
 <div class="eg-hero-aside"><div class="eg-hero-aside-label">THE IDEA IN ONE SENTENCE</div><div class="eg-hero-quote">“You do not have to cause an injustice to have a responsibility to challenge it.”</div><span>Start with the basics. Build better habits.</span><div class="eg-orb eg-orb-one"></div><div class="eg-orb eg-orb-two"></div></div>
</section>
<section class="eg-impact" aria-labelledby="eg-impact-title">
 <div class="eg-impact-top"><div><div class="eg-impact-kicker"><span class="eg-impact-pip" aria-hidden="true"></span> THE SCALE OF THE CRISIS</div><h2 id="eg-impact-title">Look at what the numbers tell us.</h2><p>In a 2025 report, WHO estimated that 316 million women aged 15+ experienced physical or sexual violence by an intimate partner during a 12-month period.</p></div><a href="https://www.who.int/news/item/19-11-2025-lifetime-toll--840-million-women-faced-partner-or-sexual-violence" target="_blank" rel="noopener noreferrer" class="eg-impact-source">WHO research ↗</a></div>
 <div class="eg-impact-meter"><div class="eg-impact-count"><div class="eg-impact-value" id="eg-impact-value" aria-label="Estimated annual prevalence equivalent since opening the app, not a real-time incident count" aria-live="off">0</div><div class="eg-impact-count-caption">ONE NUMBER AT A TIME · ESTIMATED ANNUAL-PREVALENCE EQUIVALENT SINCE OPENING</div></div><div class="eg-impact-rate"><span>≈ 10</span><b>women per second</b><small>316 million ÷ seconds in a year, as a statistical comparison</small></div></div>
 <p class="eg-impact-method"><strong>Important:</strong> The display increases by about one every 0.1 seconds, illustrating 316 million divided across the seconds in a year. It is <em>not</em> a live incident count, a count of newly harmed women, or live surveillance. It measures no individual event. The source figure counts women affected within a year; repeated abuse and event timing are unknown. The illustrative counter resets when the app opens.</p>
 <div class="eg-impact-divider"></div>
 <div class="eg-impact-bottom"><div><span class="eg-impact-secondary-number">~1 every 10 minutes</span><p>Women and girls killed by intimate partners or other family members, based on a global average of about 50,000 deaths in 2024—not an incident-by-incident live count.</p></div><a href="https://chile.unwomen.org/en/digital-library/publications/2025/11/femicides-in-2024-global-estimates-of-intimate-partner-family-member-femicides" target="_blank" rel="noopener noreferrer" class="eg-impact-source">UN Women / UNODC ↗</a></div>
</section>
${homeCinema()}
${masterSheetDownloads(true)}
<section class="fs-home-routes" aria-label="Keep learning"><div><span>THE QUESTIONS THAT CHANGE EVERYTHING</span><h2>How does harm become normal?</h2><p>Trace the patterns. Understand the history. Plan a day to speak up. Find real support.</p></div><div class="fs-home-route-grid"><button type="button" data-route="patterns"><b>When Harm Becomes Normal ↗</b><small>Why abuse is never simply a communication failure</small></button><button type="button" data-route="history"><b>History &amp; Change ↗</b><small>Milestones and unfinished work</small></button><button type="button" data-route="calendar"><b>Advocacy Calendar ↗</b><small>Turn awareness into action</small></button><button type="button" data-route="resources"><b>Resource Directory ↗</b><small>Evidence, guides and support</small></button></div></section>
<div class="eg-section-label"><span>WHY THIS MATTERS</span><span>Credible context, not clickbait</span></div>
<div class="eg-stat-grid">${statCard('~1 in 3','Women affected worldwide','WHO estimates roughly one in three women have experienced specified forms of intimate-partner or non-partner sexual violence over their lifetime.','who')}${statCard('2.5×','Unpaid work','Globally, women spend about 2.5 times as long as men on unpaid domestic and care work, according to the UN’s 2024 SDG report.','unpaid')}${statCard('12','Focused lessons','Learn the concepts, explore real-world choices, and review the linked sources behind important claims.','ungei')}</div>
<div class="eg-two-col eg-home-bottom"><article class="eg-panel eg-next"><div class="eg-kicker">YOUR NEXT CHAPTER</div><div class="eg-next-number">${escapeHTML(next.number)}</div><h2>${escapeHTML(next.title)}</h2><p>${escapeHTML(next.summary)}</p><div class="eg-next-bottom"><span>${escapeHTML(next.min)} min read</span>${button('Continue lesson','learn',next.id,'eg-btn eg-btn-outline')}</div></article><article class="eg-panel eg-principles"><div class="eg-kicker">THE MINDSET</div><h2>You don't have to be perfect to begin.</h2><div class="eg-principle"><span>01</span><div><b>Ask before assuming.</b><p>Listen to people, and verify wider claims against reliable sources.</p></div></div><div class="eg-principle"><span>02</span><div><b>Stay accountable.</b><p>Good intentions matter; so do consequences and repair.</p></div></div><div class="eg-principle"><span>03</span><div><b>Turn insight into action.</b><p>Learning counts most when it changes daily behavior.</p></div></div></article></div>

<div class="eg-feature-strip"><div><span class="eg-strip-symbol">◎</span><div><b>Practice without public pressure</b><p>Explore eight realistic situations, reflect, and try a stronger response.</p></div></div>${button('Open practice lab','practice','','eg-btn eg-btn-outline')}</div>`}
function lessonCard(l){const done=state.completed.includes(l.id);return `<button class="eg-lesson-card" type="button" data-route="learn" data-id="${l.id}"><div class="eg-card-top"><span class="eg-lesson-num">${l.number}</span><span class="eg-card-status ${done?'eg-done':''}">${done?'✓ Completed':l.min+' min'}</span></div><span class="eg-card-category">${escapeHTML(l.category)}</span><h3>${escapeHTML(l.title)}</h3><p>${escapeHTML(l.summary)}</p><span class="eg-card-link">${done?'Review lesson':'Read lesson'} <span aria-hidden="true">↗</span></span></button>`}
function lessons(){const q=state.search.trim().toLowerCase();const filtered=EG_LESSONS.filter(l=>[l.title,l.summary,l.category].join(' ').toLowerCase().includes(q));return `${intro('The learning path','Twelve thoughtful, short lessons. Follow them in order or explore what matters most to you.','FOUNDATIONS TO PRACTICE')}<div class="eg-toolbar"><label class="eg-search"><span aria-hidden="true">⌕</span><input type="search" data-search="lessons" placeholder="Search lessons..." value="${escapeHTML(state.search)}" aria-label="Search lessons"></label><span class="eg-toolbar-count">${state.completed.length} / ${EG_LESSONS.length} completed</span></div><div class="eg-lesson-grid">${filtered.map(lessonCard).join('')||'<p class="eg-empty">No matching lessons. Try another search term.</p>'}</div>`}
function lessonDetail(l){const done=state.completed.includes(l.id),idx=EG_LESSONS.indexOf(l),prev=EG_LESSONS[idx-1],next=EG_LESSONS[idx+1];return `<div class="eg-reading-top"><button class="eg-text-button" data-route="learn">← All lessons</button><span class="eg-reading-meta">LESSON ${l.number} / ${EG_LESSONS.length} • ${l.min} MIN READ</span></div><article class="eg-reader"><div class="eg-reader-lead">${eyebrow(l.category.toUpperCase())}<h1>${escapeHTML(l.title)}</h1><p>${escapeHTML(l.summary)}</p></div><div class="eg-reader-body">${l.sections.map((s,i)=>`<section><div class="eg-section-index">0${i+1}</div><div><h2>${escapeHTML(s[0])}</h2><p>${escapeHTML(s[1])}</p></div></section>`).join('')}<aside class="eg-takeaways"><h3>What to take with you</h3><ul>${l.takeaways.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></aside><aside class="eg-try"><span>SMALL PRACTICE</span><p>${escapeHTML(l.tryThis)}</p></aside><div class="eg-lesson-sources"><b>Explore the evidence</b><p>Open original sources to explore nuances and limits.</p>${sourceLinks(l.sources)}</div></div><footer class="eg-reading-footer"><button class="eg-btn ${done?'eg-btn-outline':'eg-btn-dark'}" data-action="complete" data-id="${l.id}">${done?'✓ Marked complete — undo':'✓ Mark lesson complete'}</button><div class="eg-reading-arrows">${prev?button('← Previous','learn',prev.id,'eg-btn eg-btn-quiet'):''}${next?button('Next lesson','learn',next.id,'eg-btn eg-btn-outline'):button('My action plan','plan','','eg-btn eg-btn-outline')}</div></footer></article>`}
function practice(){return `${intro('Practice lab','Choose a real-world situation. No public scores, no humiliation—just useful feedback and better options.','8 EVERYDAY SCENARIOS')}<div class="eg-scenario-grid">${EG_SCENARIOS.map((s,i)=>`<button class="eg-scenario-card" data-route="practice" data-id="${s.id}"><div><span class="eg-scenario-tag">${escapeHTML(s.tag)}</span><span class="eg-scenario-number">0${i+1}</span></div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.prompt)}</p><span class="eg-card-link">Try this scenario ↗</span></button>`).join('')}</div>`}
function scenarioDetail(s){const a=state.scenarioAnswers[s.id];const best=s.choices[s.best];const idx=EG_SCENARIOS.indexOf(s);const next=EG_SCENARIOS[(idx+1)%EG_SCENARIOS.length];return `<div class="eg-reading-top"><button class="eg-text-button" data-route="practice">← All scenarios</button><span class="eg-reading-meta">SITUATION ${idx+1} OF ${EG_SCENARIOS.length}</span></div><article class="eg-scenario-detail eg-panel">${eyebrow(s.tag.toUpperCase())}<h1>${escapeHTML(s.title)}</h1><p class="eg-situation">${escapeHTML(s.prompt)}</p><h2>What would you do?</h2><div class="eg-options">${s.choices.map((c,i)=>`<button type="button" class="eg-option ${a===i?'eg-option-picked':''}" data-action="scenario-answer" data-id="${s.id}" data-index="${i}" ${a!==undefined?'disabled':''}><span class="eg-choice-letter">${'ABC'[i]}</span><span>${escapeHTML(c.label)}</span></button>`).join('')}</div>${a!==undefined?`<div class="eg-feedback ${a===s.best?'eg-feedback-best':''}" role="status"><div class="eg-feedback-eyebrow">${a===s.best?'A STRONG RESPONSE':'ROOM TO IMPROVE'}</div><h3>${escapeHTML(s.choices[a].feedback)}</h3>${a!==s.best?`<p><strong>A stronger alternative:</strong> ${escapeHTML(best.label)} ${escapeHTML(best.feedback)}</p>`:''}</div><div class="eg-scenario-actions"><button class="eg-btn eg-btn-outline" data-action="retry-scenario" data-id="${s.id}">Try again</button>${button('Next scenario','practice',next.id,'eg-btn eg-btn-dark')}</div>`:'<p class="eg-hint">Choose an option to see feedback. You can always try again.</p>'}<div class="eg-lesson-crossref">Connected lesson: <button class="eg-text-button" data-route="learn" data-id="${s.lesson}">${escapeHTML(lesson(s.lesson).title)} ↗</button></div></article>`}
function quiz(){if(state.quizDone){const score=Object.keys(state.quizAnswers).filter(k=>state.quizAnswers[k]===EG_QUIZ[Number(k)].answer).length;return `${intro('Knowledge check','The goal is to understand the explanations, not to earn a label.','REFLECT AND REVIEW')}<article class="eg-panel eg-score"><div class="eg-score-icon">✦</div><div class="eg-kicker">YOU FINISHED</div><h2>${score} <small>/ ${EG_QUIZ.length} questions</small></h2><p>${score===EG_QUIZ.length?'Excellent recall. Keep the curiosity going.':'Every question is a chance to understand something more clearly.'}</p><div class="eg-score-actions"><button class="eg-btn eg-btn-dark" data-action="restart-quiz">Try again</button>${button('Review sources','sources','','eg-btn eg-btn-outline')}</div></article><div class="eg-quiz-review"><h2>Review your answers</h2>${EG_QUIZ.map((q,i)=>`<details class="eg-accordion"><summary><span>${String(i+1).padStart(2,'0')} · ${escapeHTML(q.q)}</span><b class="${state.quizAnswers[i]===q.answer?'eg-positive':'eg-attention'}">${state.quizAnswers[i]===q.answer?'Correct':'Review'}</b></summary><div class="eg-accordion-body"><p><strong>Answer:</strong> ${escapeHTML(q.choices[q.answer])}</p><p>${escapeHTML(q.why)}</p>${sourceLinks([q.source])}</div></details>`).join('')}</div>`}
const i=state.quizIndex,q=EG_QUIZ[i],a=state.quizAnswers[i],answered=a!==undefined;return `${intro('Knowledge check','Twelve questions to explore your understanding. Explanations and primary sources are provided for every answer.','NO PRESSURE • NO SHAMING')}<article class="eg-panel eg-quiz-panel"><div class="eg-quiz-head"><span>QUESTION ${String(i+1).padStart(2,'0')} / ${EG_QUIZ.length}</span><span>${Math.round(i/EG_QUIZ.length*100)}% through</span></div><div class="eg-quiz-meter"><div style="width:${i/EG_QUIZ.length*100}%"></div></div><h2>${escapeHTML(q.q)}</h2><div class="eg-options">${q.choices.map((c,n)=>`<button type="button" class="eg-option ${answered?(n===q.answer?'eg-option-correct':n===a?'eg-option-wrong':''):''}" data-action="quiz-answer" data-index="${n}" ${answered?'disabled':''}><span class="eg-choice-letter">${'ABC'[n]}</span><span>${escapeHTML(c)}</span></button>`).join('')}</div>${answered?`<div class="eg-feedback ${a===q.answer?'eg-feedback-best':''}" role="status"><div class="eg-feedback-eyebrow">${a===q.answer?'THAT’S RIGHT':'HERE’S WHAT TO KNOW'}</div><h3>${escapeHTML(q.why)}</h3>${sourceLinks([q.source])}</div><div class="eg-quiz-controls"><button class="eg-btn eg-btn-dark" data-action="quiz-next">${i===EG_QUIZ.length-1?'See results →':'Next question →'}</button></div>`:'<p class="eg-hint">Select one answer. You will see an explanation before moving on.</p>'}</article>`}
function myths(){const q=state.search.toLowerCase();const items=EG_MYTHS.filter(m=>(m.claim+' '+m.answer).toLowerCase().includes(q));return `${intro('Common questions','Thoughtful responses to concerns and misconceptions, without ridiculing the people asking.','QUESTIONS ARE WELCOME')}<div class="eg-toolbar"><label class="eg-search"><span aria-hidden="true">⌕</span><input data-search="myths" type="search" placeholder="Search questions..." value="${escapeHTML(state.search)}" aria-label="Search questions"></label><span class="eg-toolbar-count">${items.length} questions</span></div><div class="eg-accordion-group">${items.map(m=>`<details class="eg-accordion"><summary><span>${escapeHTML(m.claim)}</span><span class="eg-accordion-plus" aria-hidden="true">+</span></summary><div class="eg-accordion-body"><p>${escapeHTML(m.answer)}</p>${sourceLinks(m.sources)}</div></details>`).join('')||'<p class="eg-empty">No questions found.</p>'}</div>`}
function glossary(){const q=state.search.toLowerCase();const filtered=EG_GLOSSARY.filter(g=>g.join(' ').toLowerCase().includes(q));return `${intro('Plain-language glossary','Clear definitions of words that show up in conversations about feminism and gender.','KNOW THE LANGUAGE')}<div class="eg-toolbar"><label class="eg-search"><span aria-hidden="true">⌕</span><input data-search="glossary" type="search" placeholder="Search terms..." value="${escapeHTML(state.search)}" aria-label="Search glossary"></label><span class="eg-toolbar-count">${filtered.length} terms</span></div><div class="eg-glossary-grid">${filtered.map(([term,def])=>`<article class="eg-glossary-item"><h3>${escapeHTML(term)}</h3><p>${escapeHTML(def)}</p></article>`).join('')||'<p class="eg-empty">No matching terms.</p>'}</div><p class="eg-note">Definitions are brief educational summaries. Terms may be used differently across traditions and disciplines.</p>`}

function patterns(){
 const cards=[
 ['01','Social permission','Sexist slurs, jokes, and dismissing women’s expertise can make contempt feel ordinary. The point is not to treat every rude comment as violence, but to see how repeated messages shape what people excuse.'],
 ['02','Power and entitlement','Some perpetrators believe they are entitled to control a partner’s clothing, friends, sex, money, or decisions. A relationship is not ownership.'],
 ['03','Escalation and coercion','Monitoring, isolation, threats, sexual pressure, and financial restrictions can create fear long before visible physical violence.'],
 ['04','Risk is multi-layered','CDC identifies attitudes that accept violence, hostility toward women, controlling behavior, poor nonviolent conflict skills, peer norms, and institutional conditions among risk factors. No single factor explains every case.'],
 ['05','Silence and barriers','Victims may fear retaliation, disbelief, poverty, losing housing, family disruption, stigma, or lack of safe resources. Asking “why didn’t they leave?” overlooks these constraints.'],
 ['06','What changes it','Men can challenge harmful remarks, listen without interruption, reject controlling behavior, seek accountability for their own actions, support survivors’ choices and support prevention organizations.']
 ];
 return `${intro('When Harm Becomes Normal','Not all abuse starts with a punch. Learn how social norms, entitlement, unequal power and silence can normalize harm—and how to interrupt those patterns.','UNDERSTAND THE PATTERN')}
 <div class="fs-safety-banner"><strong>Conflict is not the same as coercive control.</strong><p>Disagreement, frustration or being hurt never gives anyone permission to intimidate, threaten, force, stalk or assault a partner. Abuse is the responsibility of the person choosing it.</p>${sourceLinks(['cdc-risk','hotline-healthy'])}</div>
 <div class="fs-patterns-grid">${cards.map(c=>`<article class="eg-panel fs-pattern-card"><span>${c[0]}</span><h2>${escapeHTML(c[1])}</h2><p>${escapeHTML(c[2])}</p></article>`).join('')}</div>
 <section class="eg-panel fs-pattern-special"><div class="eg-kicker">A CRITICAL DISTINCTION</div><h2>“We just need to communicate better.” When is that true?</h2><div class="fs-pattern-compare"><div><h3>Ordinary relationship conflict</h3><p>Partners disagree, but both can express concerns safely, set boundaries, leave a conversation, and make decisions without fear or retaliation. Listening, pausing, and collaborative problem-solving can help.</p></div><div><h3>Abuse or coercive control</h3><p>One person uses intimidation, threats, isolation, violence or other controls to gain power. The harmed person cannot make it safe by finding the right words. A safety-focused, survivor-centered response is essential.</p></div></div><p><strong>Important:</strong> The National Domestic Violence Hotline does not recommend couples counseling where abuse is present because it can expose the harmed partner to added risk.</p>${sourceLinks(['hotline-talk','hotline-therapy'])}</section>
 <div class="eg-panel fs-pattern-special"><div class="eg-kicker">THE PARTNER / STRANGER QUESTION</div><h2>Why can danger come from someone who claims to love you?</h2><p>Closeness does not guarantee safety. Someone may say they love a partner while also using control or harm. WHO estimated 316 million women experienced physical or sexual violence by an intimate partner within a twelve-month period. UN Women and UNODC estimated that roughly 60% of women and girls intentionally killed in 2024 were killed by partners or family members. These statistics concern different forms of violence and should not be conflated.</p>${sourceLinks(['who2025','unfem2025'])}</div>
 <div class="fs-next-action"><h2>Knowledge is only the beginning.</h2><p>Identify one behavior you will stop, one voice you will listen to, and one concrete action you will take.</p>${button('Practice real-life scenarios','practice','','eg-btn eg-btn-dark')}${button('Find safety resources','resources','','eg-btn eg-btn-outline')}</div>`;
}
function historyTimeline(){
 const categories=['All',...new Set(FS_HISTORY.map(x=>x.category))];const records=FS_HISTORY.filter(x=>fsHistoryCategory==='All'||x.category===fsHistoryCategory);
 return `${intro('History & Change','Progress did not happen automatically. Explore important milestones, the people who organized for change, and the inequalities still left unresolved. This is a selected timeline, not an exhaustive global history.','HISTORY IS MADE BY PEOPLE')}
 <div class="fs-filter-row" role="group" aria-label="Filter historical events">${categories.map(c=>`<button type="button" data-action="history-filter" data-category="${escapeHTML(c)}" aria-pressed="${c===fsHistoryCategory?'true':'false'}">${escapeHTML(c)}</button>`).join('')}</div>
 <div class="fs-history-track">${records.map(e=>`<article class="fs-history-item"><div class="fs-history-year">${escapeHTML(e.year)}</div><div class="eg-panel fs-history-card"><span>${escapeHTML(e.category)}</span><h2>${escapeHTML(e.title)}</h2><p>${escapeHTML(e.description)}</p><a href="${escapeHTML(e.url)}" target="_blank" rel="noopener noreferrer">Explore primary context ↗</a></div></article>`).join('')}</div>
 <div class="eg-info-panel"><b>Whose history gets told?</b><p>Movements were never monolithic. Race, class, disability, geography, colonialism and other forces shaped access to legal rights and movement leadership. Use the source links to explore experiences beyond this short overview.</p></div>`;
}
function eventDate(ev,year){return new Date(year,ev.month-1,ev.day,12)}
function calendar(){
 const first=new Date(fsCalendarYear,fsCalendarMonth,1);const offset=first.getDay();const days=new Date(fsCalendarYear,fsCalendarMonth+1,0).getDate();
 const thisMonth=FS_EVENTS.filter(e=>e.month===fsCalendarMonth+1&&(fsCalendarCategory==='All'||e.category===fsCalendarCategory));
 const categories=['All',...new Set(FS_EVENTS.map(e=>e.category))];
 const today=new Date();const next=FS_EVENTS.map(e=>{let y=today.getFullYear();if(eventDate(e,y)<new Date(today.getFullYear(),today.getMonth(),today.getDate(),0))y++;return {...e,year:y,when:eventDate(e,y)}}).sort((a,b)=>a.when-b.when).slice(0,3);
 const cells=[];for(let i=0;i<offset;i++)cells.push('<div class="fs-calendar-cell fs-calendar-blank" aria-hidden="true"></div>');
 for(let day=1;day<=days;day++){const evs=thisMonth.filter(e=>e.day===day);const isToday=today.getDate()===day&&today.getMonth()===fsCalendarMonth&&today.getFullYear()===fsCalendarYear;cells.push(`<div class="fs-calendar-cell ${evs.length?'fs-calendar-has-event':''} ${isToday?'fs-calendar-today':''}" aria-label="${day} ${first.toLocaleDateString('en-US',{month:'long'})}, ${evs.length} observances"><span>${day}</span>${evs.map(e=>`<a href="#fs-calendar-event-${e.month}-${e.day}" title="${escapeHTML(e.title)}" aria-label="Go to ${escapeHTML(e.title)}" class="fs-calendar-mark"></a>`).join('')}</div>`)}
 return `${intro('Advocacy Calendar','A year-round guide to verified observances and action opportunities. These are recurring awareness dates, not live local events. Check the linked organizers for annual themes and activities.','ACT WITH PURPOSE')}
 <section class="eg-panel fs-calendar-shell"><div class="fs-calendar-controls"><div><span class="eg-kicker">INTERNATIONAL OBSERVANCES</span><h2>${first.toLocaleDateString('en-US',{month:'long',year:'numeric'})}</h2></div><div><button type="button" data-action="cal-prev" aria-label="Previous month">←</button><button type="button" data-action="cal-today">Today</button><button type="button" data-action="cal-next" aria-label="Next month">→</button></div></div>
 <div class="fs-filter-row" role="group" aria-label="Filter advocacy dates">${categories.map(c=>`<button type="button" data-action="cal-filter" data-category="${escapeHTML(c)}" aria-pressed="${fsCalendarCategory===c?'true':'false'}">${escapeHTML(c)}</button>`).join('')}</div>
 <div class="fs-calendar-grid" role="group" aria-label="Monthly calendar">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=>`<div class="fs-calendar-day-head">${x}</div>`).join('')}${cells.join('')}</div>
 <div class="fs-calendar-event-list">${thisMonth.length?thisMonth.map(e=>`<article class="fs-calendar-event" id="fs-calendar-event-${e.month}-${e.day}"><div class="fs-calendar-event-date"><strong>${e.day}</strong><span>${first.toLocaleDateString('en-US',{month:'short'})}</span></div><div><span>${escapeHTML(e.category)}</span><h3>${escapeHTML(e.title)}</h3><p>${escapeHTML(e.description)}</p><div class="fs-calendar-event-links"><a href="${escapeHTML(e.url)}" target="_blank" rel="noopener noreferrer">Official source ↗</a><button type="button" data-action="cal-ics" data-id="${e.month}-${e.day}">Add to calendar ↓</button></div></div></article>`).join(''):'<p class="eg-empty">No entries in this month for that filter. Try another month or show all topics.</p>'}</div></section>
 <section class="eg-panel fs-up-next"><h2>Coming up next</h2>${next.map(e=>`<div><strong>${e.when.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</strong><span>${escapeHTML(e.title)}</span></div>`).join('')}<p>The annual 16 Days of Activism runs November 25–December 10. Consult UN Women for the current campaign theme.</p><a href="https://chile.unwomen.org/en/what-we-do/ending-violence-against-women/unite/theme" target="_blank" rel="noopener noreferrer">UN Women campaign ↗</a></section>`;
}
function resources(){
 const categories=['All',...new Set(FS_RESOURCES.map(x=>x.category))], kinds=['All',...new Set(FS_RESOURCES.map(x=>x.kind))];const q=fsResourceQuery.trim().toLocaleLowerCase();
 const records=FS_RESOURCES.filter(x=>(fsResourceCategory==='All'||x.category===fsResourceCategory)&&(fsResourceKind==='All'||x.kind===fsResourceKind)&&(!q||[x.title,x.org,x.description,x.format,x.category,x.kind,x.url].join(' ').toLocaleLowerCase().includes(q)));
 return `${intro('Resource Directory','Practical help, rigorous research, learning guides, historical records and action tools. Search verified URLs in this edition or continue the search using an external search engine.','BEYOND THE FILMS')}
 ${masterSheetDownloads()}
 <div class="fs-safety-banner"><strong>Looking for help now?</strong><p>If someone is unsafe, use the support links rather than waiting for an awareness event. In the U.S., call 800-799-SAFE for the National Domestic Violence Hotline or contact RAINN for sexual assault support.</p>${button('Support & safety','help','','eg-btn eg-btn-outline')}</div>
 <div class="eg-panel fs-resources-tools"><label for="fs-resource-search">Search organizations, titles, topics and URLs</label><input id="fs-resource-search" type="search" data-resource-search value="${escapeHTML(fsResourceQuery)}" placeholder="Try: coercive control, consent, UN, science, legal rights…" autocomplete="off"><div class="fs-filter-title">Topics</div><div class="fs-filter-row" role="group" aria-label="Resource topics">${categories.map(c=>`<button type="button" data-action="resource-category" data-category="${escapeHTML(c)}" aria-pressed="${c===fsResourceCategory?'true':'false'}">${escapeHTML(c)}</button>`).join('')}</div><div class="fs-filter-title">Resource type</div><div class="fs-filter-row" role="group" aria-label="Resource type">${kinds.map(c=>`<button type="button" data-action="resource-kind" data-kind="${escapeHTML(c)}" aria-pressed="${c===fsResourceKind?'true':'false'}">${escapeHTML(c)}</button>`).join('')}</div><div class="fs-resources-search-footer"><span>${records.length} / ${FS_RESOURCES.length} verified links</span><button type="button" data-action="resource-clear">Clear filters</button><button type="button" data-action="resource-web">Search wider web ↗</button></div></div>
 <div class="fs-resource-directory">${records.length?records.map(x=>`<article class="eg-panel fs-resource-card"><div class="fs-resource-tags"><span>${escapeHTML(x.category)}</span><span>${escapeHTML(x.kind)} · ${escapeHTML(x.format)}</span></div><h2>${escapeHTML(x.title)}</h2><p>${escapeHTML(x.description)}</p><div class="fs-resource-card-bottom"><span>${escapeHTML(x.org)}</span><a href="${escapeHTML(x.url)}" target="_blank" rel="noopener noreferrer">Open original ↗</a></div></article>`).join(''):'<div class="eg-panel"><h2>No matches</h2><p>Try fewer keywords or clear the filters.</p></div>'}</div><div class="eg-info-panel"><b>How the search works</b><p>Search and filters operate locally on the curated URLs packaged with this release. “Search wider web” opens an external search provider with your keywords; Femscape does not scrape or live-index the internet. URL listings are informational, not endorsements of every opinion on a linked page. Links can change.</p></div>`;
}
function shareFemscape(){
 const shareUrl=window.location.href.split('#')[0];
 if(!/^https?:$/.test(window.location.protocol)||['localhost','127.0.0.1'].includes(window.location.hostname)){alertUser('Share the public URL once Femscape is published. Local file links cannot be shared.');return;}
 const data={title:'Femscape — See the Reality. Take Action.',text:'Explore feminism, understand how harm becomes normal, and take action with Femscape.',url:shareUrl};
 if(navigator.share){navigator.share(data).catch(err=>{if(err&&err.name!=='AbortError')copyFemscapeLink(shareUrl)});return;}
 copyFemscapeLink(shareUrl);
}
function copyFemscapeLink(url){
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(()=>alertUser('Femscape link copied.'),()=>copyFallback(url));return;}
 copyFallback(url);
}
function copyFallback(url){const field=document.createElement('textarea');field.value=url;field.style.position='fixed';field.style.left='-9999px';document.body.appendChild(field);field.select();try{if(document.execCommand('copy'))alertUser('Femscape link copied.');else alertUser('Open this page in a public browser to copy its URL.')}catch(e){alertUser('Copy is unavailable in this browser.')}finally{field.remove()}}
function downloadEventICS(month,day){
 const e=FS_EVENTS.find(x=>x.month===month&&x.day===day);if(!e)return;
 const pad=n=>String(n).padStart(2,'0');const dateText=`${fsCalendarYear}${pad(month)}${pad(day)}`;
 const end=new Date(fsCalendarYear,month-1,day+1);const until=`${end.getFullYear()}${pad(end.getMonth()+1)}${pad(end.getDate())}`;
 const esc=s=>String(s).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/[,;]/g,m=>'\\'+m);
 const txt=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Femscape//Advocacy Calendar//EN','BEGIN:VEVENT','UID:femscape-'+dateText+'-'+month+'-'+day+'@femscape','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'').replace('Z','Z'),'DTSTART;VALUE=DATE:'+dateText,'DTEND;VALUE=DATE:'+until,'SUMMARY:'+esc(e.title),'DESCRIPTION:'+esc(e.description+' Official source: '+e.url),'URL:'+e.url,'END:VEVENT','END:VCALENDAR'].join('\r\n');
 const blob=new Blob([txt],{type:'text/calendar;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='femscape-'+dateText+'.ics';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);alertUser('Calendar event downloaded.');
}

function sources(){const q=state.search.toLowerCase();const filtered=EG_SOURCES.filter(s=>[s.title,s.org,s.description].join(' ').toLowerCase().includes(q));return `${intro('Evidence library','Explore original research summaries, government guidance and nonprofit resources. Check scope and limitations before sharing statistics.','TRACE EVERY CLAIM')}${masterSheetDownloads(true)}<div class="eg-toolbar"><label class="eg-search"><span aria-hidden="true">⌕</span><input data-search="sources" type="search" placeholder="Search organizations or topics..." value="${escapeHTML(state.search)}" aria-label="Search sources"></label><span class="eg-toolbar-count">${filtered.length} references</span></div><div class="eg-source-list">${filtered.map((s,i)=>`<article class="eg-source-row"><div class="eg-source-counter">${String(EG_SOURCES.indexOf(s)+1).padStart(2,'0')}</div><div class="eg-source-text"><span>${escapeHTML(s.org)} · ${escapeHTML(s.year)}</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.description)}</p></div><a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" class="eg-source-open" aria-label="Read ${escapeHTML(s.title)} in a new tab">↗</a></article>`).join('')||'<p class="eg-empty">No matching references.</p>'}</div><div class="eg-info-panel"><b>How to read responsibly</b><p>Ask: What population was measured? Where and when? What definition was used? Are we looking at a descriptive statistic, a causal claim, or a legal rule? U.S. legal guidance does not automatically apply elsewhere. Links may change over time.</p></div>`}
function films(){
 const categories=['All',...new Set(FS_FILMS.map(f=>f.category))];
 const query=fsFilmSearch.toLocaleLowerCase().trim();
 const found=FS_FILMS.filter(f=>(fsFilmCategory==='All'||f.category===fsFilmCategory)&&(!query||[f.title,f.creator,f.description,f.category,f.type].join(' ').toLocaleLowerCase().includes(query)));
 return `${intro('Films & talks',`${FS_FILMS.length} carefully selected talks, documentaries, and shorts on feminism, healthy masculinity, safety, consent, equality and practical action. Pick a topic or search the collection.`,'WATCH • REFLECT • ACT')}
 <div class="fs-film-content-note">Some films discuss violence, discrimination or abuse. Nothing autoplays. Videos stream from their publishers only when selected; some providers may restrict embedding. Always use the original link if playback is unavailable. Trailers are labeled as trailers; the app does not host full copyrighted documentaries.</div>
 <section class="fs-library-tools" aria-label="Explore video library"><div class="fs-library-search-line"><label for="fs-film-search">Find a film or topic</label><span class="fs-library-count">${found.length} of ${FS_FILMS.length} videos</span></div><input id="fs-film-search" type="search" data-film-search value="${escapeHTML(fsFilmSearch)}" placeholder="Search titles, speakers or topics…" autocomplete="off" aria-label="Search films and talks"><div class="fs-library-filters" role="group" aria-label="Filter by topic">${categories.map(category=>`<button type="button" data-action="film-category" data-category="${escapeHTML(category)}" aria-pressed="${category===fsFilmCategory?'true':'false'}" class="${category===fsFilmCategory?'is-active':''}">${escapeHTML(category)} <span>${category==='All'?FS_FILMS.length:FS_FILMS.filter(f=>f.category===category).length}</span></button>`).join('')}</div></section>
 <div class="fs-film-grid" id="fs-film-results">${found.map((f)=>`<article class="fs-film-card"><button type="button" class="fs-film-cover" data-action="film" data-id="${escapeHTML(f.id)}" aria-label="${f.externalOnly?'View publisher resource for':'Play'} ${escapeHTML(f.title)}">${f.poster?`<img class="fs-library-poster" src="${escapeHTML(f.poster)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:''}<span class="fs-film-index">${escapeHTML(f.category)} · ${escapeHTML(f.type)}</span><span class="fs-film-play" aria-hidden="true">${f.externalOnly?'↗':'▶'}</span><span class="fs-film-view">${f.externalOnly?'PUBLISHER RESOURCE ↗':'WATCH IN LIGHTBOX →'}</span></button><div class="fs-film-details"><span>${escapeHTML(f.creator)} · ${escapeHTML(f.duration)}</span><h2>${escapeHTML(f.title)}</h2><p>${escapeHTML(f.description)}</p><div class="fs-film-actions"><button type="button" class="eg-btn eg-btn-outline" data-action="film" data-id="${escapeHTML(f.id)}">${f.externalOnly?'View details':'Watch now'} ↗</button><a target="_blank" rel="noopener noreferrer" href="${escapeHTML(f.url)}">Open original ↗</a></div></div></article>`).join('')||'<div class="fs-library-empty"><h2>No videos match.</h2><p>Try another topic, search term or clear the filters.</p><button class="eg-btn eg-btn-outline" type="button" data-action="film-clear">Show all videos</button></div>'}</div>
 <div class="eg-info-panel"><b>After watching</b><p>Whose experience was centered? What assumption changed? What could you do differently today? Videos provide context and perspectives; consult original research when evaluating statistics or scientific claims.</p></div>`;
}
function showFilm(id){
 const f=FS_FILMS.find(x=>x.id===id);if(!f)return;
 const overlay=$('#fs-film-modal');if(!overlay)return;
 if(overlay.hidden)lastFilmTrigger=document.activeElement;
 const related=FS_FILMS.filter(x=>x.category===f.category&&x.id!==f.id).slice(0,7);
 const content=$('#fs-film-dialog-body');
 content.innerHTML=`<div class="fs-film-dialog-head"><div><span>${escapeHTML(f.category)} · ${escapeHTML(f.creator)}</span><h2 id="fs-film-modal-title">${escapeHTML(f.title)}</h2></div><button type="button" class="fs-film-close" data-action="close-film" aria-label="Close video">✕</button></div>${f.embed?`<div class="fs-film-video"><iframe title="${escapeHTML(f.title)}" src="${escapeHTML(f.embed)}" loading="eager" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`:`<div class="fs-external-video"><div class="fs-external-icon">↗</div><h3>Watch on the original publisher's website</h3><p>This resource is not available as a confirmed embeddable video. Femscape does not pretend to play it here.</p><a class="eg-btn eg-btn-light" href="${escapeHTML(f.url)}" target="_blank" rel="noopener noreferrer">Open official resource ↗</a></div>`}<div class="fs-film-dialog-foot"><p>${escapeHTML(f.description)}<br><span>Playback is provided by the original publisher. If the embedded player is blocked, use the publisher link.</span></p><a href="${escapeHTML(f.url)}" target="_blank" rel="noopener noreferrer">Original publisher ↗</a></div>${related.length?`<div class="fs-related-label">MORE ON ${escapeHTML(f.category.toUpperCase())}</div><div class="fs-film-modal-switcher" aria-label="Watch related videos">${related.map(video=>`<button type="button" data-action="film" data-id="${escapeHTML(video.id)}">${escapeHTML(video.title)}</button>`).join('')}</div>`:''}`;
 overlay.hidden=false;document.body.classList.add('fs-modal-open');overlay.querySelector('[data-action="close-film"]').focus();
}
function closeFilm(){const overlay=$('#fs-film-modal');if(!overlay||overlay.hidden)return;overlay.hidden=true;$('#fs-film-dialog-body').innerHTML='';document.body.classList.remove('fs-modal-open');if(lastFilmTrigger&&document.contains(lastFilmTrigger))lastFilmTrigger.focus();}
function plan(){const n=state.tasks.length;return `${intro('Turn learning into action','Choose small, specific changes. Your checklist stays in your browser; no account or analytics required.','YOUR PERSONAL PRACTICE')}<div class="eg-panel eg-plan-summary"><div><div class="eg-kicker">ACTION CHECKLIST</div><h2>${n} <span>/ ${EG_TASKS.length} completed</span></h2><p>Check off what you have actually practiced—not what you intend to do later.</p></div><div class="eg-progress-disc" style="--pct:${Math.round(n/EG_TASKS.length*100)}"><strong>${Math.round(n/EG_TASKS.length*100)}%</strong><span>done</span></div></div><div class="eg-plan-groups">${['Today','This week','This month'].map(group=>`<section class="eg-plan-group"><h2>${group}</h2><div class="eg-task-list">${EG_TASKS.filter(t=>t.group===group).map(t=>`<div class="eg-task"><label><input type="checkbox" data-task="${t.id}" ${state.tasks.includes(t.id)?'checked':''}><span class="eg-check-ui" aria-hidden="true">✓</span><span class="eg-task-name">${escapeHTML(t.label)}</span></label><button class="eg-task-link" data-route="learn" data-id="${t.lesson}" aria-label="Read connected lesson">↗</button></div>`).join('')}</div></section>`).join('')}</div><div class="eg-settings"><h2>Your data, your choice</h2><p>Lesson progress and completed actions are saved only in this browser’s local storage. The app does not transmit them to a server. Clearing browser storage will erase them.</p><div class="eg-settings-actions"><button class="eg-btn eg-btn-outline" data-action="export">Export progress</button><button class="eg-btn eg-btn-quiet" data-action="reset">Reset my progress</button></div></div>`}
function help(){return `${intro('Support and safety','If you or someone you know is experiencing abuse, professional support is available. Learning material cannot replace a trained advocate.','YOU DO NOT HAVE TO HANDLE THIS ALONE')}<div class="eg-help-grid"><article class="eg-panel"><div class="eg-help-icon">☎</div><h2>Domestic violence support</h2><p>In the United States, the National Domestic Violence Hotline provides confidential support and safety-planning information.</p><a class="eg-btn eg-btn-dark" href="tel:+18007997233">Call 800-799-SAFE</a><p class="eg-help-small">Or text <strong>START</strong> to <strong>88788</strong>.</p><a href="https://www.thehotline.org/get-help/" target="_blank" rel="noopener noreferrer" class="eg-inline-link">Visit the official hotline ↗</a></article><article class="eg-panel"><div class="eg-help-icon">♡</div><h2>Sexual assault support</h2><p>In the United States, RAINN offers a confidential national sexual assault hotline and online support.</p><a class="eg-btn eg-btn-outline" href="tel:+18006564673">Call 800-656-HOPE</a><p class="eg-help-small">If you are in immediate danger, contact local emergency services.</p><a href="https://rainn.org/5-rules-for-getting-consent/" target="_blank" rel="noopener noreferrer" class="eg-inline-link">RAINN consent & support information ↗</a></article></div><div class="eg-info-panel"><b>If someone confides in you</b><p>Listen, thank them for trusting you, ask what they need, and respect their choices. Do not pressure them to make a public disclosure, confront someone, or report before they are ready. If someone’s device activity may be monitored, consider safer ways to access support.</p></div>`}
function about(){return `${intro('About Femscape','An independent, evidence-linked educational project encouraging men to understand feminism and translate learning into action.','WHY THIS EXISTS')}<div class="eg-panel eg-about-content"><h2>Learning, not humiliation.</h2><p>Femscape begins with a simple premise: gender-based inequality is serious, and people learn better when they can ask questions, encounter evidence, reflect on real situations and practice change without public ridicule.</p><p>The app emphasizes respect for women and girls, human rights for everyone, careful language, and the difference between intention and impact. Men can have real struggles; that truth does not cancel out the distinct inequalities that women and girls face.</p><h3>Editorial approach</h3><p>Lessons are educational syntheses of linked public sources. Examples and suggested scripts are teaching exercises, not direct quotes or formal scientific findings. Statistics are labeled with scope. This is not legal advice, therapy, crisis counseling or a substitute for professional training.</p><h3>Support or share the project</h3><p>Femscape is free to use. You can share its public URL or choose to support the developer through the same donation page linked from Go Vegan. Payments are processed by the destination provider, not inside Femscape. Donations are optional.</p><p><a class="eg-inline-link" href="https://michaelsboost.com/donate" target="_blank" rel="noopener noreferrer">Support the developer ↗</a> · <a class="eg-inline-link" href="https://rainn.org/give-to-rainn" target="_blank" rel="noopener noreferrer">Donate directly to RAINN ↗</a></p><h3>Privacy and independence</h3><p>All progress is kept in browser local storage. No login, advertising, analytics or external API is required for the app itself. Opening a cited link or playing a film loads third-party publisher content with its own privacy policies.</p><p class="eg-about-credit">Made as a starting point for lifelong learning. Published with care. © ${new Date().getFullYear()} Michael Schwartz.</p>${button('Explore the sources','sources','','eg-btn eg-btn-dark')}</div>`}
const viewName={patterns:'When Harm Becomes Normal',history:'History & Change',calendar:'Advocacy Calendar',resources:'Resources',home:'Overview',learn:'Learning path',practice:'Practice lab',films:'Films & talks',quiz:'Knowledge check',myths:'Common questions',glossary:'Glossary',sources:'Evidence library',plan:'Action plan',help:'Support & safety',about:'About'};
function parseHash(){const h=window.location.hash.replace(/^#\/?/,'');const [route,id]=h.split('/');let clean='';try{clean=decodeURIComponent((id||'').slice(0,80))}catch(e){}return {route:viewName[route]?route:'home',id:clean}}
function go(route,id){state.route=viewName[route]?route:'home';state.item=id||'';state.search='';state.mobileOpen=false;const next='#/'+state.route+(state.item?'/'+encodeURIComponent(state.item):'');try{if(window.location.hash!==next)history.replaceState(null,'',next)}catch(e){/* restricted preview frames may block history edits */}render();try{window.scrollTo({top:0,behavior:'auto'})}catch(e){}}
function render(){const label=$('#eg-current-label');if(label)label.textContent=viewName[state.route]||'Overview';const mob=$('#eg-mobile-nav');if(mob){mob.classList.toggle('eg-open',state.mobileOpen);mob.setAttribute('aria-hidden',(state.mobileOpen||window.innerWidth>750)?'false':'true');mob.inert=(window.innerWidth<=750&&!state.mobileOpen)};const menuToggle=$('#eg-menu-btn');if(menuToggle)menuToggle.setAttribute('aria-expanded',state.mobileOpen?'true':'false');const pct=$('#eg-sidebar-percent');if(pct)pct.textContent=pc()+'%';const progress=$('#eg-sidebar-progress');if(progress)progress.style.width=pc()+'%';const ratio=$('#eg-sidebar-ratio');if(ratio)ratio.textContent=state.completed.length+' of '+EG_LESSONS.length+' lessons';document.querySelectorAll('[data-nav]').forEach(el=>{const active=el.getAttribute('data-nav')===state.route;el.classList.toggle('eg-active',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
let output='';switch(state.route){case 'home':output=home();break;case 'learn':output=state.item&&lesson(state.item)?lessonDetail(lesson(state.item)):lessons();break;case 'practice':output=state.item&&EG_SCENARIOS.some(s=>s.id===state.item)?scenarioDetail(EG_SCENARIOS.find(s=>s.id===state.item)):practice();break;case 'films':output=films();break;case 'patterns':output=patterns();break;case 'history':output=historyTimeline();break;case 'calendar':output=calendar();break;case 'resources':output=resources();break;case 'quiz':output=quiz();break;case 'myths':output=myths();break;case 'glossary':output=glossary();break;case 'sources':output=sources();break;case 'plan':output=plan();break;case 'help':output=help();break;case 'about':output=about();break;default:output=home()};screen.innerHTML=output;updateImpactCounter();document.title=(state.route==='home'?'Femscape':(state.route==='learn'&&state.item&&lesson(state.item)?lesson(state.item).title:viewName[state.route])+' | Femscape');}
function alertUser(msg){const el=$('#eg-toast');if(el){el.textContent=msg;el.classList.add('eg-show');clearTimeout(alertUser.timer);alertUser.timer=setTimeout(()=>el.classList.remove('eg-show'),3300)}}
function progressExport(){const content={app:'Femscape',exportedAt:new Date().toISOString(),lessonIds:state.completed,completedActions:state.tasks,bestQuizScore:state.bestScore,questionCount:EG_QUIZ.length};const blob=new Blob([JSON.stringify(content,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='femscape-progress.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);alertUser('Progress exported to a JSON file.')}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-route]');if(nav&&root.contains(nav)){e.preventDefault();go(nav.dataset.route,nav.dataset.id);return}const btn=e.target.closest('[data-action]');if(!btn||!root.contains(btn))return;const a=btn.dataset.action;switch(a){case 'complete':{const id=btn.dataset.id;state.completed=state.completed.includes(id)?state.completed.filter(x=>x!==id):[...state.completed,id];save();render();alertUser(state.completed.includes(id)?'Lesson marked complete.':'Lesson removed from completed.');break}case 'scenario-answer':{if(state.scenarioAnswers[btn.dataset.id]!==undefined)return;state.scenarioAnswers[btn.dataset.id]=Number(btn.dataset.index);render();break}case 'retry-scenario':{delete state.scenarioAnswers[btn.dataset.id];render();break}case 'quiz-answer':{if(state.quizAnswers[state.quizIndex]!==undefined)return;state.quizAnswers[state.quizIndex]=Number(btn.dataset.index);render();break}case 'quiz-next':{if(state.quizAnswers[state.quizIndex]===undefined)return;if(state.quizIndex>=EG_QUIZ.length-1){state.quizDone=true;const score=EG_QUIZ.filter((q,i)=>state.quizAnswers[i]===q.answer).length;state.bestScore=state.bestScore===null?score:Math.max(score,state.bestScore);save()}else state.quizIndex++;render();window.scrollTo({top:0,behavior:'smooth'});break}case 'restart-quiz':{state.quizIndex=0;state.quizDone=false;state.quizAnswers={};render();break}case 'export':progressExport();break;case 'reset':if(confirm('Clear lesson completion, action checklist and best quiz score saved in this browser?')){state.completed=[];state.tasks=[];state.bestScore=null;save();render();alertUser('Your saved progress has been cleared.')}break;case 'film':showFilm(btn.dataset.id);break;case 'film-category':fsFilmCategory=btn.dataset.category;render();break;case 'film-clear':fsFilmCategory='All';fsFilmSearch='';render();break;case 'home-film-select':switchHomeFilm(Number(btn.dataset.index));break;case 'home-film-prev':switchHomeFilm(fsHomeFilmIndex-1,'home-film-prev');break;case 'home-film-next':switchHomeFilm(fsHomeFilmIndex+1,'home-film-next');break;case 'close-film':closeFilm();break;case 'share':shareFemscape();break;case 'history-filter':fsHistoryCategory=btn.dataset.category;render();break;case 'resource-category':fsResourceCategory=btn.dataset.category;render();break;case 'resource-kind':fsResourceKind=btn.dataset.kind;render();break;case 'resource-clear':fsResourceCategory='All';fsResourceKind='All';fsResourceQuery='';render();break;case 'resource-web':{const q=fsResourceQuery.trim()||'women rights feminism education gender violence resources';window.open('https://www.google.com/search?q='+encodeURIComponent(q),'_blank','noopener,noreferrer');break;}case 'cal-prev':fsCalendarMonth--;if(fsCalendarMonth<0){fsCalendarMonth=11;fsCalendarYear--;}render();break;case 'cal-next':fsCalendarMonth++;if(fsCalendarMonth>11){fsCalendarMonth=0;fsCalendarYear++;}render();break;case 'cal-today':fsCalendarYear=new Date().getFullYear();fsCalendarMonth=new Date().getMonth();render();break;case 'cal-filter':fsCalendarCategory=btn.dataset.category;render();break;case 'cal-ics':{const parts=btn.dataset.id.split('-').map(Number);downloadEventICS(parts[0],parts[1]);break;}case 'menu':state.mobileOpen=!state.mobileOpen;render();break;default:break}});
document.addEventListener('keydown',e=>{
 const modal=$('#fs-film-modal');if(!modal||modal.hidden)return;
 if(e.key==='Escape'){e.preventDefault();closeFilm();return;}
 if(e.key==='Tab'){
  const controls=[...modal.querySelectorAll('button:not([disabled]),a[href],iframe')];
  if(!controls.length)return;
  const first=controls[0],last=controls[controls.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
document.addEventListener('click',e=>{if(e.target&&e.target.id==='fs-film-modal')closeFilm();});
document.addEventListener('change',e=>{const el=e.target;if(el.matches('[data-task]')&&root.contains(el)){const id=el.dataset.task;state.tasks=el.checked?[...new Set([...state.tasks,id])]:state.tasks.filter(x=>x!==id);save();render();}});
document.addEventListener('input',e=>{if(e.target.matches('[data-resource-search]')&&root.contains(e.target)){const input=e.target,pos=input.selectionStart;fsResourceQuery=input.value;render();const replacement=$('[data-resource-search]');if(replacement){replacement.focus();if(typeof pos==='number'&&replacement.setSelectionRange)try{replacement.setSelectionRange(pos,pos)}catch(err){}}return;}if(e.target.matches('[data-film-search]')&&root.contains(e.target)){const input=e.target,pos=input.selectionStart;fsFilmSearch=input.value;render();const replacement=$('[data-film-search]');if(replacement){replacement.focus();if(typeof pos==='number'&&replacement.setSelectionRange)try{replacement.setSelectionRange(pos,pos)}catch(err){}}return;}if(e.target.matches('[data-search]')&&root.contains(e.target)){const input=e.target,pos=input.selectionStart;state.search=input.value;render();const replacement=$('[data-search]');if(replacement){replacement.focus();if(typeof pos==='number'&&replacement.setSelectionRange)try{replacement.setSelectionRange(pos,pos)}catch(err){}}}});
window.addEventListener('resize',()=>{const menu=$('#eg-mobile-nav');if(menu){menu.inert=(window.innerWidth<=750&&!state.mobileOpen);menu.setAttribute('aria-hidden',(state.mobileOpen||window.innerWidth>750)?'false':'true')}});
window.addEventListener('hashchange',()=>{const p=parseHash();state.route=p.route;state.item=p.id;state.search='';render();});
const initial=parseHash();state.route=initial.route;state.item=initial.id;render();
requestAnimationFrame(animateImpactCounter);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',startFemscape,{once:true});
else startFemscape();
})();
