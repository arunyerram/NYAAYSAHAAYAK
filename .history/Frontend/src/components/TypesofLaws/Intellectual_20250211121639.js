import { useNavigate } from "react-router-dom";
const Intellectual = () => {
  const navigate = useNavigate();
    return ( 
        <>

        <div>
          <header>INTELLECTUAL LAW</header>
        Intellectual Property (IP) refers to creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce. IP is protected by law through patents, copyrights, trademarks, and trade secrets, which enable people to earn recognition or financial benefit from what they invent or create. 
        </div>

        <div>

          <details >
            <summary> <b>Whether an Indian citizen partner is required for a foreigner or Foreign Company to start a business in India? </b></summary>
            <div className="faq__content">
                <p>No, if a Foreign Company wants to start a business in India in the Form of a branch office or a liaison office or as a 100% subsidiary then it does not require an Indian partner in India. Such legal entities if started with the required permissions then they can legally repatriate the funds back to their country at any point of time. Only in the cases of Joint ventures Indian partner is required. In addition to that there are restrictions with regards to the permissibility of FDI in certain sectors. If it is a 100% automatic route, then approval of the Government to start the business is not necessary. In such automatic route cases paper work to be done through the dealer and to be approved by the Reserve Bank of India.</p>
            </div>
            </details>

            <details>
            <summary> <b>How to directly approach Supreme Court?</b></summary>
            <div className="faq__content">
                <p>An individual can directly approach the Supreme Court of India without seeking for a remedy in a lower Court or in a High Court, only when he is able to establish that one or more the fundamental rights guaranteed to that person under the Constitution of India is violated by the Government/State.

            </p>
            </div>
            </details>

            <details>
            <summary><b>Is registration of marriage compulsory for divorce in Hindu Law?</b></summary>
            <div className="faq__content">
                <p>No need. Registration of marriage is not necessary to go for divorce proceedings in Hindu Marriage Law.</p>
            </div>
          </details>

        </div>

        </>
     );
}
 
export default Intellectual;