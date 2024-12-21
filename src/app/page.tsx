import React from "react";



export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto", color: "#444" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#16a085", fontSize: "2.5rem", marginBottom: "10px" }}>Accessible Route</h1>
        <h2 style={{ color: "#2c3e50", fontSize: "1.5rem" }}>Privacy Policy</h2>
        <p><strong>Last Updated:</strong> December 21, 2024</p>
      </header>

      <section>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal data when you use our application, <strong>Accessible Route</strong>. By downloading or using the app, you agree to the practices described in this policy. Please read it carefully.
        </p>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>1. Data We Collect</h2>
        <h3 style={{ color: "#16a085" }}>1.1. Personal Information</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Email Address:</strong> Required for account creation and sending app-related notifications.</li>
          <li><strong>Username:</strong> Used to create your profile and identify you within the app.</li>
          <li><strong>Phone Number (Optional):</strong> Provided optionally for contact purposes.</li>
          <li><strong>Profile Photo:</strong> Uploaded profile images are stored securely.</li>
          <li><strong>UID (User Identifier):</strong> A unique identifier assigned to each user, managed by Google Firebase.</li>
        </ul>
        
        <h3 style={{ color: "#16a085" }}>1.2. Calendar Data</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Calendar Entries:</strong> Includes events like route plans or places to visit. Data stored includes:</li>
          <ul style={{ paddingLeft: "20px" }}>
            <li><strong>Route Key:</strong> Identifies the associated route.</li>
            <li><strong>Event Dates:</strong> Specific dates and times of events.</li>
          </ul>
        </ul>

        <h3 style={{ color: "#16a085" }}>1.3. User Activity</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Liked Places:</strong> Favorited locations or routes are recorded.</li>
          <li><strong>Ratings:</strong> Ratings given by users for specific routes (e.g., a 4-star rating).</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>1.4. Additional Information (Optional)</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Education Level:</strong> Provided optionally by users.</li>
          <li><strong>Account Status:</strong> Indicates account state (e.g., frozen or admin status).</li>
        </ul>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>2. How We Use Your Data</h2>
        <p>We use the collected data for:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Providing a personalized experience to users.</li>
          <li>Supporting route planning and sharing features.</li>
          <li>Managing and improving user profiles.</li>
          <li>Ensuring app security and functionality.</li>
        </ul>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>3. Data Storage and Security</h2>
        <p>
          Your data is stored securely using Google Firebase services, which implement:
        </p>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Encrypted storage:</strong> Ensures data is protected against unauthorized access.</li>
          <li><strong>Secure authentication:</strong> Prevents unauthorized data access.</li>
        </ul>
        <p>While we follow industry standards to protect your data, no system can guarantee complete security.</p>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>4. Third-Party Services</h2>
        <p>
          We collect and use your location data only for the following purposes:
        </p>
        <ul>
          <li>To provide accurate route recommendations based on your current location.</li>
          <li>To calculate the distance to places you are interested in.</li>
          <li>To ensure the best possible user experience by providing location-based features.</li>
          <li>This data is used solely within the app and is not shared with any third-party services except for the functionality provided by Google Maps API.</li>
        </ul>
        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>5. Third-Party Services</h2>
        <p>
          Our app relies on trusted third-party services like Google Firebase to store and process data. For details about Firebase privacy practices, refer to Google Firebase Privacy Policy.
        </p>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>6. Data Sharing</h2>
        <p>We do not sell or rent your data. Data may be shared under the following circumstances:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>If required by law or legal proceedings.</li>
          <li>With service providers (e.g., Firebase) to process data on our behalf.</li>
          <li>To investigate violations of our terms or ensure app security.</li>
        </ul>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>7. Your Rights</h2>
        <p>You have the following rights regarding your data:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li><strong>Access:</strong> Request access to the personal data we store.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request deletion of your data if you close your account.</li>
        </ul>
        <p>To exercise these rights, contact us at: <a href="mailto:kaan1662@hotmail.com">kaan1662@hotmail.com</a></p>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as our services evolve. Significant changes will be communicated through this page or via in-app notifications.
        </p>

        <h2 style={{ color: "#333", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>9. Contact Us</h2>
        <p>
          If you have questions or concerns regarding this Privacy Policy, please contact us:
        </p>
        <p>Email: <a href="mailto:kaan1662@hotmail.com">kaan1662@hotmail.com</a></p>
      </section>
    </div>
  );
}
