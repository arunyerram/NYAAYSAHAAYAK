import { Link } from "react-router-dom";

const LawTypes = () => {
    return ( 
        <>
        <section class="container">
            <h2 class="text-center" style={{marginBottom:"25px"}}>Types of laws</h2>
            <div class="row">
                
                <div class="col-md-4" style={{marginBottom:"30px"}}>
                <Link to="/constitution">
                <button class="lawsession"><img src="https://imgs.search.brave.com/0_OSt7sv_G4S7rAzn8nvwZwFwffcatt-w3gqUH-tGS0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/NzU5MTI5L3Bob3Rv/L3VuaXRlZC1zdGF0/ZXMtY29uc3RpdHV0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1XcjVRRm5f/WHlGd09uMmtzOUJX/UmpXZEozVWloOGZX/S2hhQWJiMWw5eWZz/PQ" class="img" alt="Real-time Legal Advice Logo" />
                   
                     <h3>Constitutional Law</h3></button>
                    </Link>
                     </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Criminal">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/HP0GUgINnp4NFYkf34U5Gf0BVajQcYm0gVl0yVGAAPc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZWdhbC1sYXct/Y29uY2VwdC1pbWFn/ZS1nYXZlbC1oYW5k/Y3VmZnNfMzkxMDUy/LTgyNjcuanBnP3Np/emU9NjI2JmV4dD1q/cGc" class="img" alt="On-demand Legal Documents Logo" />
                   <h3>Criminal Law</h3>
                   </button>
                   </Link>
                    </div>


                <div class="col-md-4"style={{marginBottom:"20px"}}>
                <Link to="/Civil">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/cSAfq8dK_n_SojA88um68nnVhWswRkw8yHJdHKtppVs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubXlsYXdxdWVz/dGlvbnMuY29tL3Ns/aWRlc2hvdy1tb2Jp/bGUtc21hbGwvZ2F2/ZWwtYW5kLXNjYWxl/cy1vZi1qdXN0aWNl/LXdpdGgtYm9vay5q/cGc" class="img" alt="Know Your Rights Logo" />
                    <h3>Civil Law</h3>
                    </button>
                    </Link>
                   
                </div>
                <div class="col-md-4"style={{marginBottom:"20px"}}>
                <Link to="/Family">
                <button class="lawsession">
                   <img src="https://imgs.search.brave.com/sZLNYk1W2YPupItiWD9cCWJZCnRMMjDfatBwi-wtEBM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MDczMzI5Ny9waG90/by9mYW1pbHktZmln/dXJlLWFuZC1nYXZl/bC1vbi10YWJsZS1m/YW1pbHktbGF3Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/bnJZcmZVQWluRFU0/bm1PSVhPeHJZZ2lu/eXpRUDhUeUlrNS05/TlZJQk04PQ" class="img" alt="Ethics Review Logo" />
                   <h3>Family Law</h3>
                   </button>
                   </Link>
                     </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Labor">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/uztNk_WdyUkY87E-5mIRZ8bplbKReJjK0vF3ftfFJs4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sYWJv/dXItbGFib3ItbGF3/LWJvb2stbGVnaXNs/YXRpb24tanVzdGlj/ZS1jb25jZXB0LTc0/NzcxNzI1LmpwZw" class="img" alt="AI Assistant Logo" />
                    <h3>Labor Law</h3>
                    </button>
                    </Link>
                    </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/environment">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/Znhe7wriZ5DcxU8jarhYUNUWHDy4QpcpntSB8H_ax4o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lbnZp/cm9ubWVudGFsLWxh/dy1zaG93bi1jb25j/ZXB0dWFsLWJ1c2lu/ZXNzLXBob3RvLTE4/OTAzNTk2Ny5qcGc" class="img" alt="Online Marketplace Logo" />
                    <h3>Environmental Law</h3>
                    </button>
                    </Link>
                    </div>

                    
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Corporate">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/alsOMks72SfxE5OxWGd9IaMCe1TYa7hA5RPVlCixibA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTU5ODU5/OC82OTQyL2kvNDUw/L2RlcG9zaXRwaG90/b3NfNjk0MjU1NDct/c3RvY2stcGhvdG8t/YS1sYXctYm9vay13/aXRoLWEuanBn" class="img" alt="Integrated Case Management Logo" />                  
                     <h3>Corporate Law</h3>
                     </button>
                     </Link>
                    </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Intellectual">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/bjN_x5uC-E49k90QoBB9IDz5jRCs60h7KcEr_ZjKZcs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MDM2NjU2Ny9waG90/by9pbnRlbGxlY3R1/YWwtcHJvcGVydHkt/bGF3LWFib3V0LWNv/cHlyaWdodC1vbi1k/ZXNrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1JN05WZWNM/M2ZoMGpEWFZTMUo3/X05yMHNCSXlKQUlJ/bF9rUnZOek9PLUc4/PQ" class="img" alt="Automated Legal Filing Logo" />
                    <h3>Intellectual Property Law</h3>
                    </button>
                    </Link>
                    </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/tax">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/Hbs--5NkgTylKo90hr9QZjLTWhDO9jEg5opWdBCxDe8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b29kZW4tbGF3/LWdhdmVsXzI1NzEy/My03OTQzLmpwZz9z/aXplPTYyNiZleHQ9/anBn" class="img" alt="Online Appointment Booking Logo" />
                    <h3>Tax Law</h3>
                    </button>
                    </Link>
                   </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Cyber">
                <button class="lawsession">
                    <img src="https://imgs.search.brave.com/H61Zg_Q71cjrbrdxf_sSfm4mbup6LM0V0eo0iCx3G9M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMjIxNjIz/ODgvMjM5NTQvaS82/MDAvZGVwb3NpdHBo/b3Rvc18yMzk1NDkw/ODgtc3RvY2stcGhv/dG8tY3liZXItc2Vj/dXJpdHktZGF0YS1w/cm90ZWN0aW9uLWlu/Zm9ybWF0aW9uLmpw/Zw" class="img" alt="Online Appointment Booking " />
                    <h3>Cyber Law</h3>
                    </button>
                    </Link>
                   </div>


                   <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/Property">
                <button class="lawsession">
                    {/* <img src="" class="img" height="55px" width="55px" alt="Property Law" /> */}
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2022/02/property_law.jpg" height="210px" width="200px" alt="logo"/>
                    
                    <h3>Property Law</h3>
                    </button>
                    </Link>
                   </div>
            </div>

            

        </section>
        </>
     );
}
 
export default LawTypes;