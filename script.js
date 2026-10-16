document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector(".nav-wrap").classList.toggle("nav-open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav-wrap").classList.remove("nav-open")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("registrationForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const email=document.getElementById("email").value.trim();
  const course=document.getElementById("course").value;
  const study=document.getElementById("study").value;
  const message=document.getElementById("message").value.trim();
  const text =
`Hello Prejonet Farmers Academy. I would like to register/enquire about a course.

Name: ${name}
Phone/WhatsApp: ${phone}
Email: ${email || "Not provided"}
Course: ${course}
Study preference: ${study}
Message: ${message || "None"}

Please send me the registration and course information. Thank you.`;
  window.open("https://wa.me/27826870988?text="+encodeURIComponent(text),"_blank");
});
