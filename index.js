const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
dotenv.config()


require("./dbConnet")

//Main Routes
const UserRoutes = require("./routes/Main/UserRoutes")
const CourseCategoryRoutes = require("./routes/Main/CourseCategoryRoutes")
const CourseRoutes = require("./routes/Main/CourseRoutes")
const CenterRoutes = require("./routes/Main/CenterRoutes")
const UpcomingBatchesRoutes = require("./routes/Main/UpcomingBatchesRoutes")
const OnlineRegistration = require("./routes/Main/OnlineRegistractionRoutes")
const Clients = require("./routes/Main/ClientsRoutes")
const BlogCategory = require("./routes/Main/BlogCategoryRoutes")
const Blog = require("./routes/Main/BlogRoutes")
const CertificationRequest = require("./routes/Main/CertificationRequestRoutes")
const ApplyForJob = require("./routes/Main/ApplyForJobRoutes")
const ContactUs = require("./routes/Main/ContactUsRoutes")
const HomeEnquiry = require("./routes/Main/HomeEnquiryRoutes")
const FaqCategory = require("./routes/Main/FaqCategoryRoutes")
const Faq = require("./routes/Main/FaqRoutes")
const Gallery = require("./routes/Main/GalleryRoutes")
const Service = require("./routes/Main/ServiceRoutes")
const Testimonials = require("./routes/Main/TestimonialsRoutes")
const Workshop = require("./routes/Main/WorkshopRoutes")
const CMS = require("./routes/Main/CMSRoutes")
const Configration = require("./routes/Main/ConfigrationRoutes")


//Tutorials Route
const TutorialData = require("./routes/Tutorials/TutorialDataRoutes")
const Technology = require("./routes/Tutorials/TechnologyRoutes")



//Placement Route
const Drive = require("./routes/Placement/DriveRoutes")
const StudentRegistration = require("./routes/Placement/StudentRegistrationRoutes")
const PlacedStudents = require("./routes/Placement/PlacedStudentsRoutes")
const app = express()
app.use(cors());    

app.use(express.json())
app.use(express.static("/public"))
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')))

//Main

app.use("/api/user",UserRoutes)
app.use("/api/course-category",CourseCategoryRoutes)
app.use("/api/course",CourseRoutes)
app.use("/api/center",CenterRoutes)
app.use("/api/upcoming-batches",UpcomingBatchesRoutes)
app.use("/api/online-registration",OnlineRegistration)
app.use("/api/clients",Clients)
app.use("/api/blog-category",BlogCategory)
app.use("/api/blog",Blog)
app.use("/api/certification-request",CertificationRequest)
app.use("/api/apply-for-job",ApplyForJob)
app.use("/api/contactus",ContactUs)
app.use("/api/home-enquiry",HomeEnquiry)
app.use("/api/faq-category",FaqCategory)
app.use("/api/faq",Faq)
app.use("/api/gallery",Gallery)
app.use("/api/service",Service)
app.use("/api/testimonials",Testimonials)
app.use("/api/workshop",Workshop)
app.use("/api/cms",CMS)
app.use("/api/configration",Configration)


//Tutorials
app.use("/api/tutorial-data",TutorialData)
app.use("/api/technology",Technology)


//Placement
app.use("/api/drive",Drive)
app.use("/api/student-registration-placement",StudentRegistration)
app.use("/api/placed-student",PlacedStudents)

app.use('*', express.static(path.join(__dirname, 'dist'))); 
const port = 443 || process.env.PORT
app.listen(port,()=>console.log(`Server is Running on Port ${port}`))
