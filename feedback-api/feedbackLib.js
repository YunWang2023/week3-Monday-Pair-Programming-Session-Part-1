

let feedbackArray = [];
let nextId = 1;

function getAll() {
    return feedbackArray;
}

function addOne(sender, message, rating, platform) {

    if(!sender || !message || !rating || !platform) {
        return false;
    }

    const NewFeedBack = {
        id: nextId++,
        sender,
        message,
        rating,
        platform
    };
    feedbackArray.push(NewFeedBack);
    return NewFeedBack;
}

function findById(id) {
    const feedback = feedbackArray.find((item) => item.id === id);
    if (!feedback) {
        return feedback;
    }
    else {
        return false;
    }
}

function updateOneById(id, updateData) {
    const feedback = feedbackArray.find((item)=> item.id === id);
    if (feedback) {
        if (updateData.sender) {
            feedback.sender = updateData.sender;
        }
        if (updateData.message) {
            feedback.message = updateData.message;
        }
        if (updateData.rating) {
            feedback.rating = updateData.rating;
        }
        if (updateData.platform) {
            feedback.platform = updateData.platform;
        }
        return feedback;
    }
    else {
        return false;
    }
}

function deleteOneById(id) {
    const feedback = findById(id);
    if (feedback) {
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter((item) => item.id !== id);
        return feedbackArray.length < initialLength;
    }
        return false;
}

if (require.main === module) {
        const result = addOne(
            "John Smith",
            "Great session on React components!",
            5,
            "mobile"
        );

        console.log(result);
    };


    module.exports = {
    addOne,
    getAll,
    findById,
    updateOneById,
    deleteOneById

    };

    addOne("John Smith", "Great session!", 5, "mobile");
    addOne("Anna Brown", "Very useful examples.", 4, "desktop");

    console.log(getAll());
