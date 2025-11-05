-- Create DB
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Contacts
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  short_desc VARCHAR(512),
  description TEXT,
  icon VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed some services
INSERT INTO services (title, short_desc, description, icon) VALUES
('UI/UX Design', 'User-centered UI/UX design', 'Full UX research, UI mockups, prototyping and design systems.', 'UXlOGO.jpg'),
('Application Design', 'Mobile and desktop app design', 'Designing cross-platform applications focusing on usability and accessibility.', 'UIUX-designing-1.jpg'),
('Website Design', 'Responsive website design', 'Landing pages, content sites and e-commerce with performance focus.', 'UIUX-designing-1.jpg');

DELETE FROM services;
