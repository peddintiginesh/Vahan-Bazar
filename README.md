# 🚀 Vahan Bazar
## Smart Two-Wheeler Marketplace
## Key Features


### Problem statement :

Build a two-wheeler marketplace web app where users can browse, compare, and sell bikes, scooters, and EVs.

### Reason to Choose :
Buying or selling a bike today takes too much time. People have to switch between multiple apps for price comparisons, EMI calculations,or even booking test rides. Sellers also struggle to reach genuine buyers. We wanted to bring everything into one simple platform – and that’s how Vahan Bazar was born.

## Solution Overview:

### Proposed Approach :
Vahan Bazar provides a unified web platform where users can search, filter, compare, and sell two-wheelers with verified listings and a role-based login system.
![Main Page](https://github.com/peddintiginesh/Vahan-Bazar/blob/2188c626307ad991717412e4e358a0091de44933/Main.jpg)

### Key Features / Modules :

•	**Login & Register**:Separate accounts for buyers and sellers – secure and hassle-free.
    
•	**EMI Calculator & Advanced Filters**:Instantly estimate monthly payments with a simple loan EMI calculator and Filter by brand, price, and fuel type.
    
•	**Sell Your Bike** – quick listing with details & images
    
•	**Browse Bikes** – Browse Bikes: See detailed listings for new and used bikes, scooters, and EVs. 
    
•	**Book Test Rides**: Pick your showroom, date, and time slot right from the Webapp.
    
•	**Responsive design for mobile & web**

### System Architecture:
![System_ArchiTect](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/System_Architecture.png)
**Data Flow Explanation:**

1.User requests data from the frontend (browser).

2.Frontend calls backend APIs.

3.Backend processes requests, queries PostgreSQL database, and returns JSON responses.

4.Frontend renders bike listings, comparisons, and details.

5.Role-based authentication ensures Buyer & Seller access control.

### Technology Stack:

•	**Frontend**: React, Tailwind CSS, TypeScript
            
•	**Backend**: Node.js + Express
            
•	**Database**: PostgreSQL

•   **ML/AI Frameworks**: Not used (future roadmap: price prediction)

•   **APIs / Libraries**: Axios (API calls), JWT (authentication), React Router


### Algorithms & Models :

•	Filtering & comparison are handled using custom algorithms in JavaScript.

•	EMI calculation is done with a simple financial formula.

•	**Model Training & Testing Approach**:
Not applicable for current version (ML features can be added for price predictions in future).



### Data Handling :

•	**Data Sources**:

      Mocked data initially (images & specs from real listings)

      Future: real-time API integration from two-wheeler marketplaces
    
•	**Preprocessing**:

			Standardized bike attributes (brand, price, fuel, mileage, year, location)

           Resized and optimized images for web display
    
•	**Storage**: PostgreSQL (structured data) + file storage for images.
    
### Implementation Plan :

1.	Initial setup – React + Node.js + PostgreSQL environment.
        
2.	 Develop core modules (Auth, Sell Bike, Browse, EMI, Test Ride).
   
3.	 Integration of frontend & backend APIs.

4.	 Testing all features with sample data.
	 
5.	 Final build deployment.
### Deployment & Scalability :

•	**Deployment Plan**: Can be hosted on AWS or Azure.
    
•	**Scalability**: System can add dealer dashboards, AI-driven recommendations, and online payments in future updates.

# Team Credits – The Tech Weavers

### Sai Kumar: Login & Register

![LOGIN](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Login.jpg)
![Register](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Register.jpg)

### Siddhu: EMI calculator & search filters
![EMI Calculator](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Emi.jpg)
![Filter](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Filter.jpg)
### Ginesh: Test ride bookings, Node APIs
![Test_ride_section](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Test_ride.jpg)

### Sravan Sai: Sell-your-bike flow, database setup
![Sell_Bike Section](https://github.com/peddintiginesh/Vahan-Bazar/blob/00c5a7fedad797e09d979aac41fb87c90ce2b129/Sell_bike.jpg)

<h3 align="center">
  <b>🙏 Thank You for Visiting!</b>
</h3>

