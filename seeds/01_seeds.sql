INSERT INTO users (name, email, password) 
VALUES ('Eva Stanley', 'sebastianguerra@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Louisa Meyer', 'jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Dominic Parks', 'victoriablackwell@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (title, description, owner_id, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code) 
VALUES ('Speed lamp', 'description', 1, 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg', 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg?auto=compress&cs=tinysrgb&h=350', 2438, 8, 2, 1, true, 'Quebec', 'Sotboske', 'Canada', '536 Namsub Highway', '28142'),
('Blank corner', 'description', 1, 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg', 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg?auto=compress&cs=tinysrgb&h=350', 85234, 8, 2, 1, true, 'Alberta', 'Bohbatev', 'Canada', '651 Nami Road', '83680'),
('Habit mix', 'description', 2, 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg', 'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg?auto=compress&cs=tinysrgb&h=350', 46058, 7, 2, 1, true, 'Newfoundland And Labrador', 'Genwezuj', 'Canada', '1650 Hejto Center', '44583');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-11', '2018-09-26', 3, 3),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 2, 3);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
VALUES (3, 2, 1, 3, 'messages'),
(2, 2, 2, 4, 'messages'),
(3, 1, 3, 4, 'messages');
    