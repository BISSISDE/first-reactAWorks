function ForthTask() {
    const temperature = 20; 
    const isOnline = true; 


    return (
      <div>
        <p>
          {temperature > 25 ? " Ыстық" : temperature > 15 ? "Жылы" : "Суық"}
        </p>
        <p>{isOnline ? " Қолданушы онлайн" : " Қолданушы офлайн"}</p>
      </div>
    );

}
export default ForthTask