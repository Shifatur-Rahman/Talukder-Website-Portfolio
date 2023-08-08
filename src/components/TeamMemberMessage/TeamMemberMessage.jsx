import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "./TeamMemberMessage.css"

const TeamMemberMessage = () => {
  let [name, setName] = useState("");
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
    const subTitle = new URLSearchParams(location.search).get('subTitle');

  return (
    <>
<Container>
      <h2 className='DetailsPageName'>Message From {title}</h2>
      <p className='DetailsPageSubName'>~{subTitle}</p>
      <p style={{textAlign:"justify", color:"#808080"}}>
      
       <br />
       {
        title=="MR MD SAMSUL ABEDIN"&& <p>Mr. Md Samsul Abedin is a director at Talukder Group of Industries. He holds an MBA degree from a reputed university in Dhaka, which has equipped him with knowledge and skills in business and management. As a director, he is involved in various aspects of the group's operations and is committed to strengthening its brand image.
          <hr />
          <br />
          Brand image refers to the perception that customers have of a company and its products or services. It is influenced by various factors such as the company's reputation, quality of products or services, marketing strategies, and customer service. A strong brand image can help a company to differentiate itself from its competitors, increase customer loyalty, and improve its financial performance.
          <br />
          <br />
          As a director, Mr. Md Samsul Abedin may be responsible for developing and implementing strategies to enhance the group's brand image. This may involve working closely with marketing and sales teams to develop effective marketing campaigns, improving the quality of products or services, and ensuring that customer service meets the highest standards.
          <br />
          <br />
          Overall, Mr. Md Samsul Abedin's role as a director at Talukder Group of Industries is critical to the success of the group. His expertise in business and management, combined with his commitment to strengthening the group's brand image, makes him a valuable asset to the company.
            </p>
       }
        {
        title=="MR MD SAMSUL SALEHIN"&& <p>Mr. Md Samsul Salehin is a director at Talukder Group of Industries. He holds an MBA degree from a reputed university in Dhaka, which has equipped him with knowledge and skills in business and management. As a director, he is involved in various aspects of the group's operations, with a particular focus on market research and identifying new business opportunities.
         
         <hr />
          <br />

          Market research is the process of gathering and analyzing information about a market, including customer needs, preferences, and behaviors, as well as information about competitors, industry trends, and other factors that may impact the market. By conducting market research, companies can better understand the needs and wants of their target customers, and identify new opportunities for growth and expansion.
           <br />
           <br />
           As a director, Mr. Md Samsul Salehin is responsible for overseeing the group's market research activities, which may involve working closely with marketing and sales teams to design and implement research studies, analyzing data to identify trends and patterns, and using insights from market research to inform business strategy and decision-making.
           
           <br />
           <br />
           Overall, Mr. Md Samsul Salehin's role as a director at Talukder Group of Industries is critical to the success of the group. His expertise in market research and business strategy, combined with his commitment to identifying new opportunities for growth, makes him an important contributor to the group's overall success.
            </p>
       }
        {
        title=="Mrs. Shaila Akter"&& <p>Mrs. Shaila Akter is the Chief Executive Officer (CEO) of an organization. She completed her MBA from Stamford University, which has equipped her with knowledge and skills in business and management. As CEO, Mrs. Shaila Akter is responsible for overseeing all aspects of the organization's operations and leading its strategic direction.
        
          <hr />
          <br />
          Mrs. Shaila Akter very successfully transformed herself to Business Leader from a dedicated social worker who constituted her own team of execution. Under the changed circumstances of business environment within country and abroad business became difficult, but it is by virtue of her excellence and compassion she made every one’s job & role easy in achieving ultimate organizational goal & objective. 
          <br />
          <br />
          Under Mrs. Shaila Akter's leadership, the organization has undergone a successful transformation, with Mrs. Shaila Akter herself becoming a business leader. This transformation may have involved implementing new processes and strategies to improve the organization's operations and achieve its goals and objectives.

           </p>
       }
       {
        title=="Mrs.Ferdausi Akter"&& <p>A proven Public Servant with a clean & colorful professional track record who is now enriching and adding in Core Corporate values to the Group. By virtue of her pleasant personality, she became the mark of organizational integrity, contributing in developing policy for each operational segment, formulating strategic policy in attaining organizational objectives.  
        <hr />
        <br />
        As a proven public servant, Mrs. Ferdausi Akter may have gained valuable experience in the public sector, including knowledge of regulations and policies, effective communication skills, and the ability to work collaboratively with others. These skills and experiences may be valuable in her current role, where she is responsible for supporting the Managing Director and leading the organization in achieving its goals and objectives.
        <br />
        <br />
        Overall, Mrs. Ferdausi Akter's professional track record and experience make her a valuable asset to the organization she serves. Her dedication and contribution to developing policies and strategies that align with organizational objectives may help to ensure the organization's long-term success.
        
        </p>
      }
      
       </p>
      </Container>
    </>
  )
}

export default TeamMemberMessage