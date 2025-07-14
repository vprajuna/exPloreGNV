CREATE DATABASE exploregnv;

USE exploregnv;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

/*

Data for each attraction: id, name, description, category, address, contact information (website, phone, email, social media), 
hours of operation, any new updates, image, liked or diskliked by the user. 

*/

CREATE TABLE attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(100),
    social_media VARCHAR(255),
    hours_of_operation TEXT,
    new_updates TEXT,
    image_url VARCHAR(255),
    liked_by_user BOOLEAN DEFAULT FALSE
);

INSERT INTO attractions (
    id, name, description, category, address, website, phone, email, social_media, 
    hours_of_operation, new_updates, image_url, liked_by_user
) VALUES
(
    1,
    'Flashbacks Recycled Fashions',
    'Thrift store with Modern, vintage, and everything in between',
    'Shopping',
    '220 NW 8th Ave, Gainesville, FL 32601',
    'https://flashbacksrecycledfashions.com/',
    '(352) 375-3752',
    'Not Available',
    'https://www.instagram.com/flashbacksrecycledfashions/',
    'Open All Week 12:00 PM-6:00 PM',
    'Now offering two daily walk-in appointments to sell your clothes. Must call (352) 375-3752 from 12:00-3:00 the day of to reserve. Tuesday through Saturday only',
    '/flashbacks.jpg',
    FALSE
),
(
    2,
    'Germain''s Chicken Sandwiches',
    'A local restaurant specializing in chicken sandwiches, with a variety of toppings and sauces.',
    'Food and Drink',
    '220 NW 8th Ave #10, Gainesville, FL 32601',
    'https://www.germainsgnv.com/',
    '(352) 554-4545',
    'germainsgnv@gmail.com',
    'https://www.instagram.com/germains_gnv/',
    'Mon-Thu 11:00 AM-8:00 PM; Fri-Sat 11:00 AM-9:00 PM; Sun Closed',
    'Not Available',
    '/germains.png',
    FALSE
),
(
    3,
    'Maude''s Classic Cafe',
    'An eclectic Gainesville, Florida cafe and bar in "...the known center of the universe."',
    'Food and Drink',
    '101 SE 2nd Pl Ste 101 Gainesville, FL 32601',
    'https://maudescafe.weebly.com/',
    '(352) 336-9646',
    'Not Available',
    'https://www.instagram.com/maudes_cafe/',
    'Mon-Fri: 7:00 AM-6:00 PM; Sat 8:00 AM-8:00 PM; Sun 9:00 AM-6:00 PM',
    'We are looking for full time and part time staff! We need afternoon, and evening, and weekend coverage. Please come by the cafe to drop off resumes or to inquire more.',
    '/maudescafe.jpg',
    FALSE
),
(
    4,
    'Vine Sourdough Bakery',
    'Providing fresh, organic sourdough products to the Gainesville community since 2011.',
    'Food and Drink',
    '627 N Main St. Gainesville, FL 32601',
    'https://www.vinegainesville.com/',
    '(352) 872-5866',
    'info@vinegainesville.com',
    'https://www.instagram.com/vinegainesville/?hl=en',
    'Tue-Fri: 8:00 AM-6:00 PM; Sat: 8:00 AM-4:00 PM; Sun-Mon: Closed',
    'Not Available',
    '/vinebakery.jpeg',
    FALSE
),
(
    5,
    'The Top',
    'Good food, good folks, good times',
    'Food and Drink',
    '30 North Main Street Gainesville, FL, 32601',
    'https://www.thetophub.com/the-top-1',
    '(352) 337-1188',
    'Not Available',
    'https://www.instagram.com/thetop.gnv/',
    'Tue-Sun: 5:00 PM-2:00 AM; Mon: Closed',
    'The Top is turning a quarter of a century! Come help us celebrate 25 years of good food, good drinks and good times on Sat., August 9th.',
    '/thetop.jpg',
    FALSE
);

CREATE TABLE liked_attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    attraction_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (attraction_id) REFERENCES attractions(id)
);
