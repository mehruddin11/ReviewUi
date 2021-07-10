import React,{useState} from 'react';
import {FaChevronLeft, 
	FaChevronRight, 
	FaQuoteRight}  
from 'react-icons/fa';
import reviews from './data';

const Review =() => {
	const [index, setIndex] =useState(0)
	const {name, image, job, text} =reviews[index]
	const chechIndex = (number) => {
		if(number > reviews.length-1){
			return 0
		}
		if(number < 0){
			return reviews.length-1;
		}
		return number
	 
}
	const hadleClick = () =>{
		setIndex((index)=>{
			let newindex = index+1
			return chechIndex(newindex)
			 
		})
	}
	const hadleClickLeft = () =>{
		setIndex((index) => {
			let newindex = index-1;
			return chechIndex(newindex)
		})
	}
	return (
		<article className='review'>
			<div className='img-container'>
				<img className='person-img' src={image} alt = {name} />
				<span className='quote-icon'>
					<FaQuoteRight/>
				</span>
			</div>
		<h4 className='author'>{name} </h4>
			<p className='job'>{job} </p>
			<p className='info'> {text} </p>
			<div className='button-container'>
			<button className='prev-btn' onClick ={hadleClickLeft}>
				<FaChevronLeft/>
			</button >
			<button   className='next-btn' onClick ={hadleClick} >
				<FaChevronRight/>
			</button>
			</div>
		</article>		 
		)
}
export default Review;