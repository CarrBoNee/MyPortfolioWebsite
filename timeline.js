var container = document.getElementById('timeline-container');

var items = new vis.DataSet([
    { id: 1, content: '<a href="born.html">Born - March 6, 2000</a>', start: '2000-03-06', className: 'timeline-event' },
    { id: 2, content: '<a href="move.html">Moved - May 2008</a>', start: '2008-05-01', className: 'timeline-event' },
    { 
        id: 3, 
        content: '<a href="Atlanta.html"><img src="art/widetest.jpg" alt="Atlanta"></a>', 
        start: '2000-03-06', 
        end: '2008-05-01', 
        className: 'timeline-image' 
    }
]);

var options = {
    orientation: { axis: 'top', item: 'bottom' },
    zoomable: false, // Disable zoom
    horizontalScroll: true, // Enable horizontal scroll
    moveable: true,
    min: new Date('2000-01-01'), // Start of the timeline
    max: new Date('2025-01-01'), // End of the timeline
    start: new Date('2000-03-06'), // Starting view
    end: new Date('2008-05-01') // Ending view
};

var timeline = new vis.Timeline(container, items, options);

// Scroll Button Event Listeners
document.querySelector('.right-arrow').addEventListener('click', () => {
    document.getElementById('timeline-wrapper').scrollBy({ left: 200, behavior: 'smooth' });
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    document.getElementById('timeline-wrapper').scrollBy({ left: -200, behavior: 'smooth' });
});

// Smooth Horizontal Scrolling with Mouse Wheel
document.getElementById('timeline-wrapper').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.getElementById('timeline-wrapper').scrollBy({
        left: event.deltaY * 2,
        behavior: 'smooth'
    });
});

// Click and Drag Scrolling
let isDragging = false;
let startX;
let scrollLeft;
const timelineWrapper = document.getElementById('timeline-wrapper');

timelineWrapper.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.pageX - timelineWrapper.offsetLeft;
    scrollLeft = timelineWrapper.scrollLeft;
    timelineWrapper.style.cursor = 'grabbing';
});

timelineWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineWrapper.style.cursor = 'default';
});

timelineWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    timelineWrapper.style.cursor = 'default';
});

timelineWrapper.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - timelineWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    timelineWrapper.scrollLeft = scrollLeft - walk;
});
