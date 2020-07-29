import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { handleCourse, addCourse } from '../../store/actions/courses'

export default function Courses() {
    const [name, setName] = useState('')
    
    const dispatch = useDispatch();
    
    const courses = useSelector(state => state.courses.courses)
    
    const loadData = async () => {
        const user = await sessionStorage.getItem('user');
        setName(JSON.parse(user).name)
    }
    
    const alterCourses = () => {
        dispatch(handleCourse())
    }
    
    const addCourses = () => {
        dispatch(addCourse({
            name: 'React Native',
            description: 'Curso de React Native'
        }))
    }
    
    useEffect(() => {
        console.log('courses', courses);
    }, [courses])
    
    useEffect(() => {
        loadData();
    }, [])
    
    return (
        <div>
            {name}
            <button onClick={alterCourses}>Click</button>
            <button onClick={addCourses}>Click Add Course</button>
        </div>
    )
}