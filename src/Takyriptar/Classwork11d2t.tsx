function SecondTask() {
    const isSubscribed = true;

    return (
      <div>
        <p>
          {isSubscribed && <p>" Сіз Premium қолданушысыз" </p> || <p> Қарапайым қолданушы </p>}
        </p>
      </div>
    );

}
export default SecondTask