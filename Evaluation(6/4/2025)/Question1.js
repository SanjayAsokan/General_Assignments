function createStudentManager(){
    let studentdetails = {}
    
    return {
        addStudent: function(name, subject){
            if(!studentdetails[name]){
             studentdetails[name] ={subject:subject||{},Averagescore: 0}
            }
             else
                console.log("Already exists")
        },
    
        updateScore: function(name, subject, score){
            if(studentdetails[name]){
                studentdetails[name].subject[subject] =score
                this.calculateAverage(name)
            }
             else
                console.log("Details Not Found")
        },
        
        calculateAverage: function(name){
            const score = Object.values(studentdetails[name].subject)
            const allscore = score.reduce((acc,score)=>acc +score, 0)
            studentdetails[name].average = allscore /score.length
        },
    
        getStudentDetails: function(name){
            if(studentdetails[name])
                console.log(studentdetails[name])
            else
                console.log("Details Not Found")
        },
    
        addSubject: function (name, subject){
            if(studentdetails[name]){
                if(!studentdetails[name].subject[subjects]){
                studentdetails[name].subject[subjects] = null
                }
                else
                    console.log("Subject Already exists")
            }
            else
                console.log("Student Details Not Found")
        },
        
        sortedstudents: function(sortBy = 'Averagescore'){
            return Object.entries(studentdetails)
            .sort((a,b)=>{
                if(sortBy = 'Averagescore'){
                 return b[1].Averagescore - a[1].Averagescore
                }
                else{
                    return a[0].localCompare(b[0])
                }
            })
            .map(([name, details])=>({name,Averagescore: details.Averagescore}))
        },

        reportgenerating: function(){
            var reportObj = {
                Topperformance:[],
                weakstudent:[],
                frequency:{}
                }
        for(const[name, details]of Object.entries(studentdetails)){
            const Averagescore = details.Averagescore
            if(Averagescore>80){
                reportObj.Topperformance.push(name)
                }
                if(Averagescore<40){
                    reportObj.weakstudent.push(name)
                    }
        for(const sub in details.subjects){
        if(details.subject[subjects]<40){
        reportObj.frequency[subjects] = (reportObj.frequency[subjects]||0)+1
    }
}
}
return reportObj
}
}
}
var students = createStudentManager()
students.addStudent("Sanjay",{science:89, Maths: 79,})
students.updateScore("Sanjay","science", 79)


