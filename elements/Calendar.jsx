import React from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const UICalendar = () => {
  // Funktionen zum Anpassen der Darstellung der Zellen
  const dateCellRender = (date) => {
    // Hier können Sie den Inhalt der Datumzelle anpassen und das Ergebnis als ReactNode zurückgeben
    return <span>{date.date()}</span>;
  };

  const monthCellRender = (date) => {
    // Hier können Sie den Inhalt der Monatszelle anpassen und das Ergebnis als ReactNode zurückgeben
    return <span>{date.format('MMM')}</span>;
  };

  // Callback-Funktionen für Ereignisse
  const onPanelChange = (date, mode) => {
    // Hier können Sie auf Änderungen des Panels reagieren
  };

  const onSelect = (date, info) => {
    // Hier können Sie auf die Auswahl eines Datums reagieren
  };

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      onPanelChange={onPanelChange}
      onSelect={onSelect}
    />
  );
};

export default UICalendar;
