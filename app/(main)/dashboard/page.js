"use client"
import React, { useState } from 'react';
import Achievement from '@/components/Achievement';
import Image from 'next/image';

const Page = () => {
    const [goals, setGoals] = useState([
        { day: 'Mon', goal: 'Solve 5 Algebra problems.', completed: false },
        { day: 'Tue', goal: 'Write and debug one Python script.', completed: true },
       
    ]);

    const handleGoalChange = (day) => {
        setGoals((prevGoals) =>
            prevGoals.map((goal) =>
                goal.day === day ? { ...goal, completed: !goal.completed } : goal
            )
        );
    };

    return (
        <div className="w-full h-full p-10 m-0">
            <div className="">
                <h1 className='text-5xl text-[#00517A] font-gsans font-bold'>Welcome back, Badri!</h1>
            </div>
            <div className='w-full flex h-full py-10'>
                <div className='w-3/4 h-full mr-10'>
                    <div className="bg-white h-1/4 rounded-3xl w-full flex mb-4 p-10 px-32 flex justify-between items-center">
                        <div>
                            <h1 className='text-[#00517A] text-4xl font-bold mb-3'>Current Grade</h1>
                            <h2 className='text-7xl text-center font-bold'>A+</h2>
                        </div>
                        <div>
                            <h1 className='text-[#00517A] text-4xl font-bold mb-3'>Predicted Grade</h1>
                            <h2 className='text-7xl text-center font-bold'>O</h2>
                        </div>
                    </div>
                    <div className="bg-white h-3/4 rounded-3xl w-full p-10 ">
                        <h1 className='text-5xl text-[#00517A] font-gsans font-bold'>Goal Sheet</h1>
                        <div className="flex flex-col s mt-5 ">
                            <div className="flex justify-between text-2xl font-gsans font-bold">
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                                <div>Sun</div>
                            </div>
                            <div className="flex justify-between items-center text-2xl ml-2 font-gsans font-bold mb-5 ">
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {goals.map((goal) => (
                                    <div className="flex items-center" key={goal.day}>
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={goal.completed}
                                            onChange={() => handleGoalChange(goal.day)}
                                        />
                                        <label className="  text-2xl ml-2 font-gsans  ">{goal.goal}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl m-0 w-1/4 px-5 py-7">
                    <h1 className='text-2xl text-center text-[#00517A] font-gsans font-bold'>Achievements Wall</h1>
                    <Achievement/>
                    <Achievement/>
                    <Achievement/>
                </div>
            </div>
        </div>
    );
};

export default Page;
