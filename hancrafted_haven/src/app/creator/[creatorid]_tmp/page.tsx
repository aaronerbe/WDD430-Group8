import Image from 'next/image';
import React from 'react';
import "./creatorstyle.css";

const CreatorPage = () => {
  return (
    <div className="container">
      {/* Left-Right Layout Section */}
      <div className="content-row">
        <div className="image-section">
          {/* Image on the Left */}
          <Image
            src="/handcraft2.JPG"  
            alt="Content Handcraft Image for creator page"
            width={400}
            height={400}
          />
        </div>
        <div className="writeup-section">
          {/* Writeup on the Right */}
          <h2>Creator Name</h2>
          <h4>About Me</h4>
          <p>
      
Handcrafting is the art of creating items by hand using traditional methods, 
tools, and techniques. It encompasses a wide range of practices, from woodworking, 
knitting, weaving, pottery, and embroidery to jewelry making, leatherwork, and more. 
Handcrafts are often celebrated for their uniqueness, artistry, and the skill that 
goes into creating them, contrasting with mass-produced, machine-made goods.
          </p>
<br /> <br />

          <p>
          The Essence of Handcrafting:
          At its core, handcrafting emphasizes the human touch, with each piece 
          carrying the personal imprint of its creator. This personal involvement 
          brings a sense of authenticity and individuality to the final product, 
          which is why handcrafted items are often considered to be of higher 
          sentimental and sometimes even economic value. Every handcrafted item is unique, 
          even when made by the same artisan, which adds to their charm and appeal.
          </p>

        </div>
      </div>

      <br />   <br />
     
   

      {/* Cards Display Section */}
      <div className="card-section">
        <h3>Creator Work </h3>
        <div className="card-container">
          {/* Individual Cards */}
          <div className="card">
            <h4>Card 1</h4>
            <p>Description for card 1 goes here.</p>
          </div>
          <div className="card">
            <h4>Card 2</h4>
            <p>Description for card 2 goes here.</p>
          </div>
          <div className="card">
            <h4>Card 3</h4>
            <p>Description for card 3 goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;