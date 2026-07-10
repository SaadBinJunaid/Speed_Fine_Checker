let SpeedInput = document.getElementById("SpeedInput");
let SpeedCheckButton = document.getElementById("SpeedCheckButton");
let Result = document.getElementById("result");


let SpeedFineChecker = () => {
    let Speed = SpeedInput.value; 

    if (Speed === "" || Speed <= 0 || Speed > 300) {
        Result.innerHTML = "Please enter a valid speed value.";
        Result.className = "text-red-500";
        return;
    }
    
    if (Speed > 120) {
        Result.innerHTML = "License Suspended";
        Result.className = "text-red-500";
}
    else if (Speed > 100) {
        Result.innerHTML = "Fine:Rs. 5000";
        Result.className = "text-red-500";
    }

    else if (Speed > 80) {
        Result.innerHTML = "Fine:Rs. 2000";
        Result.className = "text-red-500";
    }

    else if (Speed > 60) {
        Result.innerHTML = "Warning! Drive Carefully";
        Result.className = "text-yellow-500";
    }

    else {
        Result.innerHTML = "Safe Driving"
        Result.className = "text-green-500";
    }
}

SpeedCheckButton.addEventListener("click", SpeedFineChecker);

const card = document.getElementById('card');
card.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.remove('motion-safe:animate-pulse', 'animate-pulse');
    this.classList.add('bg-white/25', 'shadow-indigo-500/20', 'border-indigo-400/50');
});
document.addEventListener('click', function() {
    card.classList.remove('bg-white/25', 'shadow-indigo-500/20', 'border-indigo-400/50');
    card.classList.add('motion-safe:animate-pulse');
    Result.innerHTML = '';
    Result.className = 'mt-4 text-center text-white/90 font-medium';
    SpeedInput.value = '';
});