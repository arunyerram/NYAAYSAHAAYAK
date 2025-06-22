// import { Routes,Route } from "react-router-dom";
// import Nav from "./Nav";

import MyCarousel from "./MyCarousel";
import MySearch from "./MySearch";
import React from 'react';
import 'react-chatbot-kit/build/main.css';
import {Link} from "react-router-dom";
import Footer from './Footer';
import { useNavigate } from "react-router-dom";









const Law = () => {
    const navigate = useNavigate();
    return ( 
        <>
        {/* <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        /> */}
        {/* <Nav/> */}
        {/* <MyCarousel/> */}
          {/* <chatbot/> */}
        <MySearch/>
         <MyCarousel/>
         {/* <Footer/> */}

        

    <main>

<section className= "container1">
            {/* <h2 className="text-center" style={{marginBottom:"20px"}}>Key Features</h2> */}


            <div className="row"> 
            
                
                <div className="col-md-4  " style={{marginBottom:"20px"}}>
                    <Link to="/KeyFeatures/LawTypes">
                    <button className="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/ecwbq7oxj2e0nuez44ec.jpg" className="img" alt="Online Marketplace Logo" />
                    <h3 style={{fontSize:"25px"}}>Laws</h3>
                    <p style={{color:"GrayText"}}>Different types of laws and their info.</p></button>
                    </Link>
                </div>





                {/* <div className="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="/legaldocuments">
                <button className="lawsession   ">
                    <img src="data:image/jpeg;base64,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" className="img " alt="On-demand Legal Documents Logo" />
                   <h3 style={{fontSize:"25px"}} >On-demand Legal Documents</h3>
                    <p style={{color:"GrayText"}}>Obtain pre-drafted legal documents such as wills, power of attorney, and more.</p>
                </button>
                </Link>
                </div> */}



               




                <div className="col-md-4  " style={{marginBottom:"20px"}}>
                <Link to="/chatbot">
                    <button className="lawsession">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fdd26PxxIM7ZZTR0LVW4g9noEqWele_WxA&usqp=CAU" className="img" alt="AI Assistant Logo" />
                        <h3 style={{fontSize:"25px"}}>LEGAL ASSISTANT</h3>
                        <p style={{color:"GrayText"}}>Explore the  solutions to simplify your legal processes and make informed decisions.</p>
                    </button>
                </Link>
                </div>


                <div className="col-md-4 "style={{marginBottom:"20px"}}>
            <Link to="/rights">
                <button className="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702546813/know_bgrbmv.png" className="img" alt="Know Your Rights Logo" />
                    <h3 style={{fontSize:"25px"}}>Know Your Rights</h3>
                    <p style={{color:"GrayText"}}>Explore ALL Your Rights</p>
                </button>
            </Link>
                </div>



                <div className="col-md-6 " style={{marginBottom:"20px",marginTop:"20px", }}>
                    <Link to="/legaladvice">
                <button className="lawsession  ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702545340/advice_s6ry5c.jpg" className="img" alt="Real-time Legal Advice Logo" />
                    <h3 style={{fontSize:"25px"}}>Legal Advice For Solving Cases</h3>
                    <p style={{color:"GrayText"}}> </p>
                    </button>
                    </Link>
                </div>

               



                 
                {/* 
                 <div className="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="/CaseManage">
                <button className="lawsession  ">
                    // <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhYVFRYVGBUYGhkZEhkZGhkSGRoaGRUcHBkaGhgcIS4lHB4sHxgZJjgnKy8xNjU2GiQ7QDszPy40NTEBDAwMEA8QHxISHzQrJSs0NDU0NDU0NDQ2MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0Pf/AABEIAMkA+gMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgEDCAL/xABKEAACAQMBBAYGBwUFBAsAAAABAgADBBEhBQYSMRMiQVFhcQcycoGRoRQzQlJikrEjgqKywRUkU2PCFnPR0iU0NTZDdJOztOHw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAICAwEBAAMAAAAAAAAAAQIRAyESMVFBEyJCcf/aAAwDAQACEQMRAD8AuaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHE5nEittbwW9qvFWqBSfVUdZ29lRqfPlEm/QlYlU7W9KTkkW1FVHY9XrN+RSAPzGateb4X1TPFc1FB7ExRx5FAD85rOLKqXOL/iecDti5PO5uT51qh/1Tvt947tDlbm48mqPUH5XJHyk/wv083oiJS+zfSVeIQKnR1l7eJejf3MuAPepm8bB9IFrcEK5NCodAtTHCT3K40PvwT3SmXHlEzKVuMREosREQEREBERAREQEREBERA4idVaqqKWdlVVGWZiFAA5kk6ASud4vSnTQlLNOlYadI2Vpg/hXRn/AIR3EyccbfSLZPay5h3e06NL62tSp+26p+pE8+bV3svbgnpLioF+4hNJPLhXHEPazIThGc9p5mbTg+1S5/HpH/aqxzj6Za/+tT/XimdabRo1fqqtJ/YdX/QzzDOMa57RyPb8Zb+E+nnXqqJ5y2Tvfe25HR3DlR9ioTWTyw2So9kiWLu56U6VQhLtBRc6dIuWpE/iHrJ78gdpEyy4sp67WmUqyInXSqqyhlIZSAQQQQQeRBHMSv8A0kb3GkDaW7EVWH7Z1ODTVhoqkcnI1z2DxIIpMbbqJt1DfPf8Ui1C0KtVGVepoyUz2qo5O4+A8TkCq7iuzuzuzOzHLMxLMT4kzqE5AyQBqSQABqSToAB2mdeOExnTG5WkTed3/R1VqAPcsaCHXgADVSPHOie/J7wJs9HZGyrfqimlVxzLA3Jz7+qPIYkZcmMTMbVPcQ7xAMu9dq2wGFtTgcsU6Sj4ZnRWOz6v1tsik/aakoP50yRKf2nxPgpicSz9pejuhVQvZVeE9is3SU/Li9ZT558pXu1NmVbeoadZCjdnaGHerciJpjnMvStxsT+6e+1a0Ko/FVt+XATlkH+Wx/lOndjnLk2ZtGnXpLVosHRuRHzBHMEdoPKecJsG5+8z2Vbi1ag5Arp4cuNR98fMadxFM+OXue1scte1+xOi2uFdFdGDIwDIw1BBGQR7p3zmakREBERAREQEREDiR+2drUrai1as3Ci+8knkqjtJ7pl16yojOxCqoLOToAoGSSe4CefN9N6GvrgtkighIt0OmB99h99vkMDvJvhh5VXK6c73b3V75yGJSgDmnRB005M5+0/yHZ2k67El93N3a97UKUV6q46So2iID3ntbuUa+7WdfWMZd2oaZVps+tV+qo1ansI9QfFQZb+z90Nn2Sg1gK9bQ5qKH1/BR1CjPacnxks28LHSlRwo5cZx/AvL4zLLmn5Fpj9U3/snfYz9EuMewc/DnI26satL62lVp+2j0/5gJeY2xc/cpY9l/wDnnYNuvjhrUAVPPhOf4G5/GVnPf2J8Hn+fUuTae5VjeKzW+KFbmeAcIz+OloMZ7Vx5yrdvbBr2lTgrJjPqONUcd6n+h1E1w5MclLjYkN1d8LixyqEPROc0nJ4Qxz1kP2TnUgaHXt1EbVuGdmd2LO5LOx5lickn3yPn1TfB8O2X8ZvZtlqCSAASToABkknkABzMtrdXdmnY0hc3IBrkdUaN0eRoiDtc9rdmoGmSYH0XbDFSq1046lE8NLPI1CMlv3VIPmwPZNmuKxua3F/4a6Ux4dreZ/TE5+XP/WL44/rm4uKtyetlKfYg5H2j9o/KZ9psYAcpg7y7TNhaislNXJdUIZwgAOet3trgYH3s8hOvd30h2txhKn93qnA4XIKMfw1NB7m4T5zLxys3Ftzemxpsxe6cPspT2CSU5AkJa5W2OyNx0mKP3r+hHIjwM+bilTvENtcqA/NGGmSB61M9jDu/UZE2UiRu1NnB14l0YaqRoQRyIMSij94divaVzSfUc6b4wHXv8+8dnvEjJcm8+zPp1i+g+k0clezrqOXssP18JS1OpkTqwy8oyyx0tH0UbeOWs3Omr2+fi6D+YfvS0J5s2ZftQrU66+tTcOB3gHrL7xke+ejqFVWVXU5VgGU94IyD8DMeXHV2vhetO6IiZLkREBERAREQKx9MG3ilNLNDhqnXr45hA3VX95gT5JjtlRyY3u2n9JvritnKlyqdo4E6qY8CF4vNjIWdvHj446Y5XdTW62wHvblaKEqo61Z8ZCIDqfaPIDtPgDLirVktKaWlooUqNT63BnmzH7Tnnr/wEjtz7AWGzBUZR09cB2zzyw/ZKfBVOSO8tMvZFkWPE2SzHLE8yTqSZz8mXldfi+OOo4sNlljxPlmOrE6knxMnqGzlA5TKo0QonVtHadG3Tjr1Epr2F2C58FHNj4CZ6WdgtV7p8vZKeyakvpPsel4P2wT/ABeA8GfZzx4/dm27P2jSrpx0aiVE70YNjwOOR8DJss9xEsqMvNjahlJVhqrLoQfOY9eil5Ta1ulHER1W5cWOTKfsuOen6ZE2WRm1bDiHGujr1lI5gjkZESoLeDYz2lw9CprjWm3IOh5MP0I7CDI2XD6Rdmi62cLhV/bUMswHPA0qL5YHEPJZTSPmdfHn5RjljpZW4m3/AO4VrTQOrZpnkWp1W6/mVwRnuZe6b3sS0wBKP3euujuqTHkXCt5P1flkH3S7r+lcGzcWjBbjANMnhI0YFl16uSoIGdMmY8uOsv8ArTG9K29Ke2lr3a0UIKWwZSQcg1GI4wPZ4VXz4pA7qbE+mXaUDxBCGaqylVZUC+sOIEZ4ioxg8/fI/aFpUpVGSsjo+pKsvAdTzHYR4jSbpu/6Pnr2lO6p3ASuSz0gMOuB6nXU5R+IHJ1xyxkGbdY462p7q4LK2FOklNclURVUscnCqAMntOBzndNITeK6sVVNoUWekuFF3RzUUjkDVQ6q3LJ7zoDNr2XtWjcpx0KiVF7eE6jwZTqp8CBOWy+2krMiJzISjeDguR92qpUj8SgsPlxfGUJvhafR9pXFMDC8fGnk44j/ABFh7p6Cv11pntFRPmcH9ZSHpgGNqZHbRQn8zy+F1UX019Hl9+j276TZtuTzVWp+6m7Iv8Kiee6Dy8PRPV/6Px3VamP4T/WacveKuPtvURE52hERAREQOJgbauuita9X/DpVH/Khb+kz5Bb7f9m3n+4q/DgOflJx7sRXnFBgATN2NZ9Nc0KJ1FSoiN7LMA3yzMSTu4uP7Ttc/wCJ/obHzxO7K6lrGLg3lfiq0qY5AFyPM8K/ABvjJTZtHCiRG1x/fB7CY/M82G2HVE4WzsqJkEajOmhKn3EaiVjsjYdtdf2hVr0ON7erVSmxq3LMy0wxXjLVSSdOzEtESvtzfq9s/wDmbn+VpfG2S6VvtrlPZFqdhm/+jJ04JHD0lzwaXPRer0ufV8eckNq7ItrSnYXFChwVbipRR2Fa5Uhaihm4CtUEa95I851UP+6Z8z/8+SW+X/VNkf7+1/8AaE03d63+1XSxkXAxqcaakk+8nnOcTkxMGiLp246SvSIytReMDzHC3+ieaLil0dapS+5UdPyOV/pPUTr+3Q/5bg/nSeZt6CP7Quscumf+bX5zTjuqrl6dQbTTn2T0ju9ccdBH+8it+ZQZ5qpZlr7rb+W1ChSp1TU4kRFbhTiGVUA9vhNOXG5SaVxsiyNobNo104K9NKicwHUNg94zyPlO20tUpU1p00VEQYRVGAB4Ca7ZekDZ9Q4+kBD/AJiPSH52HD85s1KqrqGRlZT6rKQwPkRoZhZZ1V5ZX0RkYPI6GaVtncCk1Tp7N2tLkahqZIRvAoD1QcfZ07wZus5kS2eizatU3xvrBhT2lbmonJa9PA4vfojHw6h8Ju2w9v290pahUV8Y4l9V1zy4lOo5c+RkhXoo6MjqrowwysAykdxU6ESI2Lura2tV6tCnwO44T1mYBchiqgnqgkA48BLWyz1qmqlbhclB+MH8oJ/UD4zz/wClS7D7Vq4+wqIfMAt/rEvfat+tClUrucLTRjn5nz5D4GeX727atWes3rVHZj244jkDPgMD3RjOyu2gZd3ow6tgn4ndv4yv+mUhSl+7tW3RUKVPtRFU+eOt88zTkv8AjoxnbcaTZE7JiWzzLmCxERAREQEj9t2vS2telz6SlUT8yFf6yQnEQeVEOQDM3Y150NzRqnQJUR29lXBb5Zmbvbsz6PfXFHGFDlk7BwP1kx4ANj90yFnd1Yw9PQO8CYrUag5MChPkeJfiC3wk3ZNlBNO3O2gL7Zopkjp6OEOefEg6jnwZdCe/i7pPbCu8rwtow0YHmCNCDOPKaumsu3fvDdVqdEmhTd6rEKvCi1OHtLMjOmV0xo2ckTQLGjtCkK4S3cC4d3r/AN2VuJnBDEZvOrzOgxLTiTMtTWixUq7PvhZ/QhbP9H+59HGfrOk9f6Zxevrznbe2+0KqUUe3crQZHoj6Oq8LIuEJIvOtgd+Za0Sf6X4aRuwbmrUoK1dHSqCVcOq0+Ij7SqruApz948jJKJ1XVwlOm9R2CoilnY8gqjJPwEp7SjNu7YpWqPXrNwhV4UHNnZsnhUdp6q+Q1OBPOtzh6tSqR1nd3OdccbFsfOTG9W8D3tw1RshASKKfcQnt/EcDJ8AOQE7d1d16t7UbhISgn11VvVXTPCo+02NccgNSRpnpxwmE3WVyt6iAJ753paVGGVp1CO8IzD4gS4tlbNtbfC2lutRxzuKo42J7SpIyB7PCJNrUuzrxoPAIMfPJkXmn5EzB58YYODoRzB0I90kNi7buLV+O3qMmuWX1kf20Oh7s8+4iXVtCh0i8N1bUq6d/DwuPFSe3yIle70bjhKbXFkzPRX6ym2tSnjn4so8de3WTjy45dVFxs7b9uZvtTvR0bgU7hRlkzlXA5tTJ5jvXmPEazbZ5ft67o6ujFHQhkZTgqRyIMvzczeUXtsr8J6VOpXVcABwPWGT6rDUd2o7Jnycfj3PS2OW2yThm93ee6Yd/tCnRQvWqLTUanLY+Z/8A3jKg349JjV1ahZ8SUzo9X1WYdoQc1Hjz7uwzOTa749LG+Art9DoNmkjftmHJnU6KPAEZPiB4yuqazhEmVbUGZlVQWZiAoHMk8hNccdK2p7c3ZvS3SEjqU8O/mD1B7218lMuiyE1bdfY4t6ITQuetUPexHIeA5D/7m22qTPLLdWxmol7YyQEwLYTOWUS+oiICIiAiIgVj6YNgl6aXiDLUxwV8c+At1W/dYkeT57JUc9SXFFXRkcBkYFXB1BUjBBHcQZ58313YexuCuCaDkm3c65X7jH76/MYPeB08OfXjWeeP6xd2NvPZ3C1kyV9WqnLjTOo9ocwf6Ey6KdRLlFu7RgxYddeXFjsIPquOWvdiUBJTd/eGvZvx0W6p+sptko/mOw47R8xpLcnHvue1cctL/wBn7RVxg6ONGB0IPcQeUkJoWyd9rG74RVP0evy6x4Dn8L8mHcD8JtdBKgHUqpUXs4tDj2lzn4Tmss9tUlExler2onuc/wDLOalYqMuyIBz14vmcfpIGQTK/9Lu1SlqlBThq79YdvAmC3xYoPLM+95PSbaW4ZaLfSK2oAU5UHxfkPIa+EqTae3q97UNau2TkhFGioumi/wDGacWO8tq5Xp8bOsnr1qdFPWqOqL3DJ1J8AMk+AMutbJUVLGgMUaQAqHtd+ZLd5ycnxPhK/wDRRbh9pBiM9HSqOvgx4U/ldpZ27acQLnmxLHzY5P6y3Nl3pGM62yneja0w1Q8IJCqAC7Mx5KiKCzMcHQAnSdZ3hRNatK4op/iVKfDTHi7KTwDxcKJ80l49p1OPXobekaAPZ0z1RVYeJFJFz3A98nGUEEEAgjBB1BB5gjtEy6i5gEdhHxkbd2pRulpjUfWL2OvaPPunTusAtBkBylKtXpUj3IlZlRB4KBwfuSZxIvVFB+kLYqW12Gp6ULhTUpdwORxqPAFgR7WOyQ2zNuXFsHNvUKM6hXIAbIByDg6ZGT8TLH9LtoP7PVu2jc4U/hdTp5dYfASpKT5E6cMvLHVZ5TV3HF/e1a7cVao9RuzjYkDyHJfcJ0LTmV0cn9lbo3NbBKGmn33BU/upzPyHjI1MU7216hQZmCqpZmOFAGST4CWVunux0A6Spg1SPMID2A9p7z7h4y+w92aVsOoOJz6ztqx8B90eA+cn6VvMss99RaY/XxbUZKW6T4o0pm0Uma7IorMxZ0U1mQIQ5iIgIiICIiAkbtjZVK5otRrLxI3uYMOTKewjv/pJKIl0PO29u6Nexc8QL0CcU6wHV15K4+y/yPZ2ga5PU1eirqyuoZWGGVgGBB5gg6ESud4vRXTcl7N+iY69G2Wpn2W9ZP4h3ATpw5p6yZ5YfFOumZzb3lal9VVqoO5HZB+UHEndq7p3tuT0lvU4R9tB0qefEucD2sSB0PKaWTKKy2Mxt6L/ABj6VWx7Qz8cZkXeXtar9bVqP24d2cfAnE7WSfDJK+ET5MQU5m2g6pHj/SSez92LqtjgouF+846NfPLYz7gZN7R3Ie3tWrM/G6kGoqjqBOTEE6kgkHOmmdImWMuiy2Mr0V3QTaSqx0qU3QefVcfJD8Za+7g4VZD6yEqfNTj+k8/WV09KolVDh0ZXQ+KnIz4dh8DLz2XtVayJe0fUcAXC9tNwADxD5H3HkZnzY97TjfxLbU2azulWk/R10DKrFeNHRsFkqJkcSkgHQggjIPMHGqU7+oCpNtQB0NRGe4fHaUR0RUbuJLgdxk1TcMAQcgz7mW12p7sX7W7Js65ASqoP0aoMhLlASSyk8qo5upOcnOuZtkwdq7KpXKBKy8QVldCCUZGU5VlZSGU+IPfMyo4AJJAABJJ0AHaTFsvZFZ+mq7CWSU/tVa/Fj8NNME/EL8ZUmyaXHVpJjPG6IR4M4B+Rkz6Rd5BfXpZDmhSHR0PEZ6z/ALx+QE7/AEd7ONS7DkdSkOI+2wKoP5j+7NMesdq3u6WzsrYdCmM06SIfvBQW/MdfnJP6NO2wp6SR6GYrotbadyUJndDPoU4GOlKZCJOxac7FSAVZ2TgCcwEREBERAREQEREBERA4lX+l3dziQXtNetTAS4A7Uz1Xx3qTgnubwloTquKKujI4DIylXB1BVhggjuIMnHLV2izc08skS1/Rduzw0jd1F69UYoZ7KedX8CxHwUd812luK52sbI8XQr+0L99vnTX7xPU8wTyEvGnRVVCqAFUAKBoAAMAAd2Jvy8k1qfqmOPe6intZ1PZhgVYAqQQwOoIIwQfDEmWpT5NKc7R583v3cezr8OCaLkmg/PTtRj95fmMHvx0bt7x1rKoXpEFW0qU29Rx49x7j+vKX9tTZFK4pNSrIHRuYOhB7GU81YdhEp7eb0d3NuS1ANcUeYKjNVR+JB63mvwE6seSZTWTLLGzuN02FvrZ1McFYWzn1qVbRMn7j5x8D7hNupXwIzxUSO9agI+YnmZ0zkHmNCO0EcwR2GYr2o7hK3h+JmX16R2tvfZ24JrXFIEfYRulc+Srr8pT+/HpGqXqtQoBqVufXyevUH4iPVX8I59vdNK6ACSuxt3a9yR0aHg7XbqoP3vteQzKzCTup38Rllau7qiKWdjhQO0/0HjLr3S2ILaiqDVj1qjfeY8/cNAPATo3Z3TS2XI69QjDuRg+Sj7K/r2zb7W2xKZZb6i2M0zrJZKoNJhW1OZ4lEuOGOGfUQOMTmIgIiICIiAiIgIiICIiAiIgIiIHxwjOcDOMZ7cd2ffPuIgJxicxA4xGJzECJ2vsC2uQRXo03JBAYqvGMjGVbGQZ552/slrW5qW9Tmh0bGONDqjjzHwOR2T03Nf21utRubm2uHHWoNnGNHAyVVvBXww947Zpx8nj79K5Y7azufuLTpWyPXpI1w/XbjUMU4h1UGeRAxnxJm0fQAOyTpnz0YlMsrld1aTSJS1mVSoTM6OfQWQOums7oiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//2Q==" className="img" alt="Integrated Case Management Logo" />
                    <h3 style={{fontSize:"25px"}}>Integrated Case Management</h3>
                    <p style={{color:"GrayText"}}>Access and manage your legal cases through a centralized platform, reducing complexity and confusion.</p>
                    </button>
                    </Link> */}




                {/* <div className="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="/legalfiling">
                <button className="lawsession  ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXAtIow9O7QEvay4IBXu0Aeo14Iu4TSGxzA&usqp=CAU" className="img" alt="Automated Legal Filing Logo" />
                    
                    <h3 style={{fontSize:"25px"}}>Automated Legal Filing</h3>
                    
                    <p style={{color:"GrayText"}} >Automate the legal filing process with a dedicated legal expert handling all your case updates and modifications.</p>
                    
                    </button>
                    </Link>
                </div> */}



                <div className="col-md-6 " style={{marginBottom:"30px", marginTop:"20px"}}>
                    <Link to="/Appoint">
                <button className="lawsession  ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sGSmcfw0KICe9HUXlgrzPcZIUedP9VWWOQ&usqp=CAU" className="img" alt="Online Appointment Booking Logo" />
                    <div>
                    <h3 style={{fontSize:"25px"}}>Online Appointment Booking</h3>
                    <p style={{color:"GrayText"}}>Book a consultation with a legal expert through our secure and user-friendly online platform.</p>
                    </div>
                    </button>
                    </Link>
                </div>

{/* 
                <div className="col-md-4 "style={{marginBottom:"20px"}}>
                    <Link to="/latestlegalnews">
                     <button className="lawsession  ">
                   <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702547294/news_fctra5.jpg" className="img" alt="Ethics Review Logo" />
                   <h3 style={{fontSize:"25px"}}>Latest Legal News</h3>
                    <p style={{color:"GrayText"}}>Get updated with legal information</p>
                    </button>
                    </Link>
                </div> */}



            </div>
        </section>
    </main>

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


    <Footer/>
    
    {/* <Feedback/> */}

        </>
    );
}

export default Law;