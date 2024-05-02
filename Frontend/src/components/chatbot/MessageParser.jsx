import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if(message.includes('hello') || message.includes('Hello') || message.includes('Hi')|| message.includes('hi')){
        console.log('hi');
        actions.handleHello();
        }

        if(message.includes('Civil') || message.includes('civil')){
            // console.log('Civil laws, also known as civil law or private law, constitute a legal framework that governs relationships between individuals and entities in non-criminal matters. These laws encompass a broad range of areas, including contracts, property, family law, torts, and personal injury. Unlike criminal law, which deals with offenses against the state, civil law addresses disputes between private parties seeking compensation or resolution for perceived wrongs. Civil laws provide a mechanism for individuals to seek remedies, such as monetary damages or specific performances, through civil litigation or alternative dispute resolution methods like mediation. The objective of civil laws is to uphold individuals rights, regulate conduct, and facilitate fair resolutions to conflicts in various aspects of private life.');
            actions.handleCivil();
            }
        
        if(message.includes('Family') || message.includes('family')){
            // console.log('Marriage laws, which differ across jurisdictions, encompass a spectrum of legal provisions governing the solemnization, recognition, and dissolution of marital unions. These laws typically outline prerequisites for marriage, including age restrictions and consent requirements, and establish the rights and responsibilities of spouses during the course of their marriage. Additionally, marriage laws often address issues related to property, inheritance, and support in the event of divorce or separation. The specifics of marriage legislation can vary widely, reflecting cultural, religious, and societal values within each jurisdiction, and may also evolve over time in response to changing norms and legal perspectives on the institution of marriage.');
            actions.handleFamily();
            }
        
        if(message.includes('Education') || message.includes('education')){
            // console.log('Education law, a multifaceted legal framework, governs various facets of the educational system. It encompasses compulsory education mandates, ensuring a minimum age for school attendance, while also emphasizing equal opportunities to thwart discrimination based on factors such as race, gender, or disability. Special education provisions guarantee the rights of students with disabilities through tailored Individualized Education Programs (IEPs). Additionally, education law addresses school safety concerns, teacher certification standards, curriculum guidelines, and student privacy under laws like FERPA. It extends to higher education, regulating admissions, financial aid, and campus safety. Funding distribution, discipline procedures, and due process rights are integral components, fostering a fair, safe, and equitable learning environment for students. Education law serves as a critical guide for educators, administrators, policymakers, and parents in navigating the legal landscape of the educational system.');
            actions.handleEducation();
            }
        if(message.includes('Criminal') || message.includes('criminal')){
            // console.log(' Criminal law is a branch of legal jurisprudence that defines and regulates conduct that is deemed harmful or threatening to the well-being of individuals or society as a whole. It encompasses a set of statutes and rules that identify offenses and prescribe the punishments for those found guilty. Key elements of criminal law include defining specific criminal offenses, establishing the elements required for conviction, and outlining the range of penalties that may be imposed. Criminal law is often categorized into two main types: substantive criminal law, which defines specific offenses such as theft, assault, or murder, and procedural criminal law, which sets out the rules and processes for investigating, prosecuting, and adjudicating criminal cases. The principles of criminal law emphasize the presumption of innocence until proven guilty, the burden of proof resting on the prosecution, and the right to a fair trial. Additionally, criminal law addresses concepts such as criminal intent, causation, and the classification of offenses based on severity, ranging from misdemeanors to felonies. Its primary objectives are to maintain public order, protect individuals and property, and mete out justice through a legal system that balances the interests of society and the rights of the accused.');
            actions.handleCriminal();
            
        }
        if(message.includes('Corporate') || message.includes('corporate')){
        //     console.log('Corporate law is a legal discipline governing the establishment, functioning, and dissolution of corporations, distinct legal entities formed for business activities. It encompasses various facets, including the intricate process of incorporation and the establishment of corporate governance structures that delineate the roles and responsibilities of directors, officers, and shareholders. Fiduciary duties play a pivotal role, imposing obligations of loyalty and care on corporate decision-makers to prioritize the best interests of the company and its stakeholders. Shareholder rights, securities regulation, and considerations in mergers and acquisitions constitute integral components, ensuring transparency, accountability, and fairness. Corporate law also addresses financial aspects, such as capital raising and compliance with securities laws, while evolving to incorporate elements of corporate social responsibility and ethical business conduct. Compliance and ethics, coupled with dissolution procedures and regulatory compliance, round out the comprehensive legal framework that underpins the corporate world, fostering responsible business practices and safeguarding the interests of all involved parties');
            actions.handleCorporate();
        }

        if(message.includes('Cyber') || message.includes('cyber')){
            // console.log('Cyber laws, also known as Internet laws or digital laws, encompass a set of legal principles and regulations designed to govern the use of technology, the internet, and electronic communication. These laws address a wide range of issues related to cyberspace, including online privacy, data protection, intellectual property, cybercrime, and electronic commerce. With the rapid evolution of technology, cyber laws play a crucial role in maintaining a secure and ethical digital environment. They provide a framework for addressing cyber threats, defining legal boundaries for online activities, and establishing consequences for unauthorized access, hacking, and other digital offenses. As the digital landscape continues to advance, the development and enforcement of robust cyber laws become increasingly important to ensure the protection of individuals, organizations, and society as a whole in the interconnected world of the internet.');
            actions.handleCyber();
            }

    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
            parse: parse,
            actions,
        });
        })}
    </div>
    );
};

export default MessageParser;