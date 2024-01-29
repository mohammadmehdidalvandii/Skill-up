import React, {useState} from 'react'
import Head from 'next/head'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import CourseDetailsPage from '@/components/template/courseDetails/CourseDetailsPage/CourseDetailsPage'
import CourseDetail from '@/components/template/courseDetails/CourseDetail/CourseDetail'
import CourseDetailsInfo from '@/components/template/courseDetails/CourseDetailsInfo/CourseDetailsInfo'
import db from '@/Data/db.json'
import { useRouter } from 'next/router'

function CourseDetails() {
  const [courses , setCourses] = useState(db.Courses)
  const router = useRouter()
  const {id} = router.query
  const foundProduct = courses.find(course=>course.id == id)
  return (
    <>
     <Head>
        <title>Skill-Up | جزئیات دوره</title>
    </Head>
     <PageHeader title='جزئیات دوره' text='جزئیات دوره'/>
     <div className="container">
     <div className="row mt-5 mb-5">
        <div className="col-lg-8">
            <CourseDetailsPage title={foundProduct.title}/>
            <CourseDetail image={foundProduct.image}/>
        </div>
        <div className="col-lg-4">
          <CourseDetailsInfo
            text={foundProduct.title}
            price={foundProduct.price.toLocaleString()}
          />
        </div>
     </div>
     </div>
    </>
  )
}

export default CourseDetails