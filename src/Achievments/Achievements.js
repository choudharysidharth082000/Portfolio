import './AchievementsStyle.css'
const Achievements = () =>
{
    return (
        <div className="containorAchievements">
            <div className="innerAchievments">
                <div className="imageAchievemnts">
                    <img className='img-fluid' src="https://opendoodles.s3-us-west-1.amazonaws.com/Doggie.svg" alt="" />
                </div>
                <div className="secondImageAchievements">
                    <img className='img-fluid' src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.svg" alt="" />
                </div>
                <div className="firstBox">
                    <div className="firstContent">
                        <h1>Solved 120+ Problems on Leetcode</h1>
                    </div>
                    <div className="secondContent">
                        <h1>Cleared Google Cloud Certification Program</h1>
                    </div>
                </div>
                <div className="secondBox">
                    <div className="first_content">
                        <h2>Got 339 Rank on Coding Event organized by 
                        “Samsung”</h2>
                    </div>
                    <div className="second_content">
                        <h2>Regular Contributor For Hacktober Fest</h2>
                    </div>
                    <div className="third_content">
                        <h1>Almost Have 600+ Contributions on Github</h1>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Achievements