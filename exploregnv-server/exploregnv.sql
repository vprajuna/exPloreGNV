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

INSERT INTO attractions (id, name, description, category, address, website, phone, email, social_media, hours_of_operation, new_updates,
    image_url, liked_by_user
) VALUES (
    1, 'Flashbacks Recycled Fashions', 'Thrift store with Modern, vintage, and everything in between', 'Shopping',
    '220 NW 8th Ave, Gainesville, FL 32601', 'https://flashbacksrecycledfashions.com/', '(352) 375-3752', 'Not Available',
    'https://www.instagram.com/flashbacksrecycledfashions/', 'Mon-Fri 12-6; Sat-Sun 12-6',
    'Now offering two daily walk-in appointments to sell your clothes. Must call (352) 375-3752 from 12:00-3:00 the
     day of to reserve. Tuesday through Saturday only.',
    '/flashbacks.jpg',
    FALSE
);
