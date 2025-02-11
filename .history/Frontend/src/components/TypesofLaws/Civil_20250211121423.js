import { useNavigate } from "react-router-dom";

const Civil = () => {
  const navigate = useNavigate();
    return ( 
        <>
        <header> <b>CIVIL LAW </b></header>
        <div>

        <div>
        Civil laws are a branch of legal systems that primarily deal with private disputes between individuals or entities. These laws aim to resolve conflicts and provide remedies for those who have suffered harm, rather than punishing wrongdoers as in criminal law. Civil laws cover a broad spectrum of issues, including contracts, property disputes, family matters, personal injury, and torts.

        One of the fundamental principles of civil law is the concept of compensation or restitution, where the party found liable is often required to compensate the aggrieved party for their losses. The burden of proof in civil cases is typically lower than in criminal cases, with the standard being a preponderance of evidence rather than proof beyond a reasonable doubt.

        Civil laws vary widely across jurisdictions, reflecting cultural, historical, and legal differences. In some legal systems, such as those based on Roman law, civil law is codified, meaning that laws are written down in comprehensive statutes. In contrast, common law systems rely more on precedent and judicial decisions.

        Civil litigation involves the process of bringing a lawsuit to court, with parties presenting evidence and arguments to support their claims. Courts may award damages, issue injunctions, or declare legal rights in civil cases. Mediation and arbitration are also common methods of resolving civil disputes outside the courtroom.
       </div>



         <div>
          <details >
            <summary> <b>Whether an Indian citizen partner is required for a foreigner or Foreign Company to start a business in India? </b></summary>
            <div className="faq__content">
                <p>No, if a Foreign Company wants to start a business in India in the Form of a branch office or a liaison office or as a 100% subsidiary then it does not require an Indian partner in India. Such legal entities if started with the required permissions then they can legally repatriate the funds back to their country at any point of time. Only in the cases of Joint ventures Indian partner is required. In addition to that there are restrictions with regards to the permissibility of FDI in certain sectors. If it is a 100% automatic route, then approval of the Government to start the business is not necessary. In such automatic route cases paper work to be done through the dealer and to be approved by the Reserve Bank of India.</p>
            </div>
            </details>
            <details>
            <summary> <b>How to directly approach Supreme Court? </b></summary>
            <div className="faq__content">
                <p>An individual can directly approach the Supreme Court of India without seeking for a remedy in a lower Court or in a High Court, only when he is able to establish that one or more the fundamental rights guaranteed to that person under the Constitution of India is violated by the Government/State.

            </p>
            </div>
            </details>
            <details>
            <summary> <b>Is registration of marriage compulsory for divorce in Hindu Law? </b></summary>
            <div className="faq__content">
                <p>No need. Registration of marriage is not necessary to go for divorce proceedings in Hindu Marriage Law.</p>
            </div>
          </details>
        </div>

        </div>

        
        
        </>
     );
}
 
export default Civil;