import { useNavigate } from "react-router-dom";

const Corporate = () => {
    return ( 
        <>
        <header> CORPORATE LAW</header>
        <div>
            
Corporate law, also referred to as business law, is the legal framework governing corporations' lifecycle. It encompasses the formation process, ensuring limited liability for shareholders and creating structures for governance through boards and shareholder meetings. Corporate law regulates financial activities, including securities issuance and transactions, and oversees contractual relationships with stakeholders. It plays a crucial role in ensuring compliance with various legal requirements and guides companies through dissolution processes, voluntary or involuntary, including asset liquidation. In an international context, corporate law addresses cross-border transactions and the formation of multinational corporations. Modern corporate law also emphasizes corporate social responsibility (CSR), influencing ethical business practices and sustainability reporting. Comprehending and adhering to corporate law is essential for businesses to operate ethically, within legal boundaries, and to fulfill their obligations to shareholders and society.
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
        </>
     );
}
 
export default Corporate;