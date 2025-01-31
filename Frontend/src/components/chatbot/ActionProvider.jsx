import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello, nice to meet you.I am here to assist you');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleCivil = () => {
        const botMessage = createChatBotMessage('Civil laws, also known as civil or private law, pertain to the legal relationships and disputes between private individuals, entities, or organizations that do not involve criminal offenses. These laws cover a broad spectrum of areas, including contracts, property, family law, torts, and personal injury. In the context of civil law, individuals can seek remedies, such as monetary compensation or specific performance, to address perceived wrongs or breaches of legal duties. Civil litigation is the common method for resolving disputes, though alternative dispute resolution mechanisms like mediation or arbitration may also be employed. The overarching goal of civil laws is to provide a fair and just framework for resolving conflicts, upholding individual rights, and regulating private interactions within a given legal jurisdiction.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleFamily = () => {
        const botMessage = createChatBotMessage('Family laws encompass a set of legal principles and regulations that govern familial relationships and domestic matters. These laws address various aspects of family life, including marriage, divorce, child custody, adoption, spousal support, and the distribution of marital property. Family laws vary across jurisdictions, reflecting cultural, religious, and societal norms, and they aim to provide a legal framework that balances the rights and responsibilities of family members. Key components of family laws often include regulations on marriage formalities, grounds for divorce, child custody arrangements, visitation rights, and financial support. The objective of family laws is to guide the resolution of family-related disputes, protect the interests of all parties involved, and promote the well-being of individuals within the family unit.');
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };
    const handleCyber = () => {
        const botMessage = createChatBotMessage('Cyber laws, also known as Internet laws or digital laws, encompass a set of legal principles and regulations designed to govern the use of technology, the internet, and electronic communication. These laws address a wide range of issues related to cyberspace, including online privacy, data protection, intellectual property, cybercrime, and electronic commerce. With the rapid evolution of technology, cyber laws play a crucial role in maintaining a secure and ethical digital environment. They provide a framework for addressing cyber threats, defining legal boundaries for online activities, and establishing consequences for unauthorized access, hacking, and other digital offenses. As the digital landscape continues to advance, the development and enforcement of robust cyber laws become increasingly important to ensure the protection of individuals, organizations, and society as a whole in the interconnected world of the internet.')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };


    const handleEducation = () => {
        const botMessage = createChatBotMessage('Education law, a multifaceted legal framework, governs various facets of the educational system. It encompasses compulsory education mandates, ensuring a minimum age for school attendance, while also emphasizing equal opportunities to thwart discrimination based on factors such as race, gender, or disability. Special education provisions guarantee the rights of students with disabilities through tailored Individualized Education Programs (IEPs). Additionally, education law addresses school safety concerns, teacher certification standards, curriculum guidelines, and student privacy under laws like FERPA. It extends to higher education, regulating admissions, financial aid, and campus safety. Funding distribution, discipline procedures, and due process rights are integral components, fostering a fair, safe, and equitable learning environment for students. Education law serves as a critical guide for educators, administrators, policymakers, and parents in navigating the legal landscape of the educational system.');
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleCriminal = () => {
        const botMessage = createChatBotMessage(' Criminal law is a branch of legal jurisprudence that defines and regulates conduct that is deemed harmful or threatening to the well-being of individuals or society as a whole. It encompasses a set of statutes and rules that identify offenses and prescribe the punishments for those found guilty. Key elements of criminal law include defining specific criminal offenses, establishing the elements required for conviction, and outlining the range of penalties that may be imposed. Criminal law is often categorized into two main types: substantive criminal law, which defines specific offenses such as theft, assault, or murder, and procedural criminal law, which sets out the rules and processes for investigating, prosecuting, and adjudicating criminal cases. The principles of criminal law emphasize the presumption of innocence until proven guilty, the burden of proof resting on the prosecution, and the right to a fair trial. Additionally, criminal law addresses concepts such as criminal intent, causation, and the classification of offenses based on severity, ranging from misdemeanors to felonies. Its primary objectives are to maintain public order, protect individuals and property, and mete out justice through a legal system that balances the interests of society and the rights of the accused.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleCorporate = () => {
        const botMessage = createChatBotMessage('Corporate laws, also known as business or company laws, form a legal framework that regulates the formation, operation, and dissolution of corporate entities. These laws encompass a variety of legal principles and regulations that govern the conduct of businesses, shareholders, directors, and other stakeholders involved in corporate activities. Key areas covered by corporate laws include corporate governance, shareholder rights, mergers and acquisitions, corporate finance, securities regulation, and compliance with legal and ethical standards. Corporate laws vary across jurisdictions, influenced by both national legislation and international practices. The primary goals of these laws are to ensure transparency, accountability, and the protection of stakeholders interests while promoting the efficient functioning of businesses within the legal and ethical boundaries of the respective legal systems.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,handleCivil,handleFamily,handleEducation,handleCriminal,handleCorporate,handleCyber,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;