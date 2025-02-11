import { useNavigate } from "react-router-dom";
const Property = () => {
    const navigate = useNavigate();
    return ( 
        <>
        <header> PROPERTY LAW</header>
        <div>
        Property law is a branch of civil law that governs the various forms of ownership and possession of real and personal property. It encompasses a wide range of legal principles and rules that dictate how individuals and entities can acquire, use, transfer, and protect their property rights. Real property refers to land and anything permanently attached to it, while personal property includes movable assets like cars and furniture.
        </div>
        <div>
          <details >
            <summary><b>How is property ownership transferred?</b></summary>
            <div className="faq__content">
                <p>
                
            The transfer of property ownership involves a meticulously structured process commencing with negotiations between the seller and buyer, culminating in a comprehensive agreement. A pivotal step is the drafting of a purchase agreement delineating terms, including the property's legal description, purchase price, contingencies, and the closing date. Subsequently, a thorough title search is conducted to verify ownership and identify any encumbrances. The transaction is often facilitated through escrow, with the buyer providing earnest money as a gesture of commitment. The heart of the transfer lies in the execution of a deed—an official document signed, dated, and notarized—effectuating the legal transfer of ownership. The culmination occurs during the closing, where the buyer pays the remaining purchase price, and the deed is delivered, signed, and recorded in public records. This meticulous process ensures a transparent and legally sound transfer of property, providing clarity in ownership rights and obligations.





                </p>
            </div>
            </details>
            <details>
            <summary> <b>What is real property and personal property?</b></summary>
            <div className="faq__content">
                <p>
                
            Real property and personal property are two fundamental categories in property law, each encompassing distinct types of assets with different legal characteristics.<br/>

            <b>Real Property:</b>
            Real property, also known as real estate, refers to immovable assets that are permanently attached to the land or integral to it. This category includes land and everything permanently affixed to it, such as buildings, structures, and fixtures. Real property rights are often more comprehensive and enduring, involving ownership of both the land and the structures on it. The ownership of real property is typically transferred through deeds and is subject to various land-use regulations, zoning laws, and environmental restrictions. It also involves interests like easements, which grant the right to use another person's land for a specific purpose, and covenants, which are agreements regarding the use of the land.<br/>

            <b>Personal Property:</b>
            Personal property, on the other hand, consists of movable assets that are not permanently affixed to land. This broad category encompasses tangible items like cars, furniture, electronics, and intangible items like stocks, bonds, and intellectual property. Personal property can be further classNameified into chattels, which are tangible movable items, and intangibles, which are assets without a physical presence. Ownership of personal property is typically transferred through bills of sale, contracts, or other legal instruments. Personal property rights are generally more flexible and subject to less regulatory control compared to real property.
            </p>
            </div>
            </details>
            <details>
            <summary> <b>
            How are property disputes typically resolved? </b>
            </summary>
            <div className="faq__content">
                <p>
                
            Property disputes are typically resolved through a range of legal mechanisms tailored to the specific circumstances at hand. Negotiation and mediation offer parties an opportunity to amicably settle differences with the assistance of a neutral third party, avoiding the formalities of court proceedings. Arbitration, a more structured alternative, involves a neutral arbitrator or panel whose decision is binding on the parties involved. When disputes escalate, litigation becomes a common avenue, requiring legal representation as evidence and arguments are presented before a judge or jury. Quiet title actions are initiated when there are disagreements over property ownership or title, seeking legal confirmation of ownership and resolution of competing claims. Parties may also seek specific performance through court orders to enforce contractual obligations, especially in real estate transactions. Injunctions can be employed to prevent actions that may harm the property during the dispute resolution process. Additionally, adverse possession claims, where someone asserts ownership through continuous and open use of the property, may be a factor in certain disputes. The choice of resolution method depends on factors such as the nature of the dispute, the desired outcome, and the legal principles involved.
                </p>
            </div>
          </details>
        </div>

        <button
        onClick={() => navigate(-1)} // Navigate to the previous route
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>
        </>
     );
}
 
export default Property;