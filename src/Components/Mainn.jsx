import React from 'react'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import InfoIcon from '@mui/icons-material/Info';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';

const Mainn = () => {
    return (
        <div style={{marginTop:"90px"}}>
            <div style={{display:"flex", justifyContent:'space-evenly'}} >
            <div className="leftside"> 
            <div>
            <img src="/LinkedIn-Default-Background-2020-.png" alt="logo" style={{width:"240px"}}/>
            </div>
            <div>
            <img className="cameraphoto" src="/cameralogo.png" alt="camera"/>
            </div>

            <div className="textone">
            Bonjour salma
            </div>
            <div className="texttwo">
            Ajouter une photo
            </div>
            <hr id='line'  color='#EBEBEB'/>

           <div id='blockone' > 
            <div style={{display:"flex", justifyContent:'space-between', marginLeft:"10px", marginRight:"10px"}}>
                <span style={{fontSize: "12px", lineHeight: "1.33", fontWeight: "600",color:"#757575"}} > Relations  </span>
                <span style={{fontSize: "14px", lineHeight: "1.33", fontWeight: "500",color:"#0a66c2"}}> 62  </span>
            </div>
            <div style={{marginRight:"75px",fontSize: "12px", lineHeight: "1.33", fontWeight: "500",color:"black"}}>
                Développez votre réseau
            </div>
            </div>

            <hr id='line'  color='#EBEBEB' />

            <div id='blocktwo'>
            <div style={{marginLeft:"10px",fontSize: "13px", lineHeight: "1.33", fontWeight: "100",color:"#757575",textAlign:"left"}} >
            Accédez à des infos et des outils exclusifs
            </div>
            <div style={{fontSize: "12px", lineHeight: "1.33", fontWeight: "500",color:"black",marginRight:"26px"}}>
             <span > <img   src="/petit-carreau.png" alt="carreau" style={{width:"12px",height:"12px"}}/> </span>
             <span> Essayez Premium gratuitement</span> 
            </div>
            </div>
            <hr id='line'  color='#EBEBEB'/>
            <div id='blockthree'>
                 <TurnedInIcon style={{color:"rgba(0, 0, 0, 0.7)",height:25,marginRight:"200px"}} /> 
              <div style={{marginTop:"-27px",marginRight:"100px",fontSize: "12px", fontWeight: "500",color:"black"}}>  Mes élements </div>  
            </div>

             </div>
             
             
            <div className="main">

            <div style={{display:"flex" ,flexDirection:"column",marginLeft:"15px",marginTop:"15px"}}>

                <div style={{display:"flex" ,flexDirection:"row"}}>
                <img src="/username.png" alt="the logo" />
                <div className='comm' style={{marginTop:"5px",marginLeft:"15px",border:"solid 1px",width:"430px",textAlign:"left",height:"30px",color: "#757575",borderRadius:"20px"}}> Commencer un post </div>
                </div>

                <div style={{display:"flex",flexDirection:"row",marginTop:"17px"}}>
                    <div style={{display:"flex",marginRight:"30px"}}>
                    <PhotoSizeSelectActualIcon  style={{color:"#0a66c2"}}/>
                   <div style={{color:"#757575",fontWeight:"600",marginLeft:"10px",fontSize:"14px"}}>Photo </div> 
                    </div>
                    
                    <div style={{display:"flex",marginRight:"30px"}}>
                    <VideoLibraryIcon style={{color:"green"}}/>
                     <div style={{color:"#757575",fontWeight:"600",marginLeft:"10px",fontSize:"14px"}}> video </div> 
                    </div>

                    <div style={{display:"flex",marginRight:"30px"}}>
                    <EventIcon style={{color:"orange"}}/>
                    <div style={{color:"#757575",fontWeight:"600",marginLeft:"10px",fontSize:"14px"}}> Evenement </div>
                    </div>
                   
                    <div style={{display:"flex",marginRight:"30px"}}>
                    <DescriptionIcon style={{color:"pink"}}/>
                    <div style={{color:"#757575",fontWeight:"600",fontSize:"14px"}}> Rédiger un article </div>
                    </div>
                    
                    
                
                </div>

            </div>

            </div>



            <div className="rightside">

            <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginBottom:"15px"}}>
            <div style={{fontSize: "16px", lineHeight: 1.5, color: "rgb(0, 0, 0, 0.9)",fontWeight: 600}}>Ajouter à votre fil d'actualité </div> 
          <InfoIcon style={{color:"gray"}}/>
           </div> 

               <div style={{display:"flex"}} >

              
               <div style={{display:"flex",flexDirection:"column",width:'60px',height:'60px',marginLeft:'10px',marginTop:'5px'}}>
               <img  src="/persone-one.png" alt="personone" />
               <img style={{marginTop:"30px"}} src="/persone-two.png" alt="persontwo" />
               <img style={{marginTop:"30px"}} src="/person-three.png" alt="personthree" />
               </div>
            
             <div>

               <div style={{marginTop:"10px"}}>
               <div className='text' > Zeechan Khalil</div>
               <div  style={{fontSize: "13px", fontWeight: 100, color: "#757575",textAlign: "left",marginBottom: "5px",marginLeft:"10px"}}> Legal Consel</div>
               <div id='suivre'> + Suivre </div>
               </div>

                <div style={{marginTop:"15px"}}>
                <div className='text'> Rania Zervalaki Patrona</div>
                <div  style={{fontSize: "13px", fontWeight: 100, color: "#757575",textAlign: "left",marginBottom: "5px",marginLeft:"10px"}}> Big Variety Of Construction Systems, Event Productions & Tourism Enterprises at Erga...</div>
                <div id='suivre'> + Suivre </div>
                </div>

                <div style={{marginTop:"15px"}}>
                <div className='text'> TOUS LES CONCOURS DE LA TUNISIE TN</div>
                <div  style={{fontSize: "13px", fontWeight: 100, color: "#757575",textAlign: "left",marginBottom: "5px",marginLeft:"10px"}}> Entreprise . Recrutement </div>
                <div id='suivre'> + Suivre </div>
                </div>

                </div>

                </div>

            <div style={{marginTop:"10px",textAlign:"left",marginLeft:"20px",color:"#757575"}}> Voir toutes les suggestions -> </div> 
            </div>
            </div> 
        </div>
    )
}

export default Mainn


