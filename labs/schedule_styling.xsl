<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Расписание работы врачей</h1>
                <table align="center" border="1">
                    <tr bgcolor="orange">
                        <th>ФИО</th>
                        <th>Специальность</th>
                        <th>Понедельник</th>
                        <th>Вторник</th>
                        <th>Среда</th>
                        <th>Четверг</th>
                        <th>Пятница</th>
                        <th>Номер кабинета</th>
                    </tr>
                    <xsl:for-each select="schedule/record">
                        <!-- Сортировка по ФИО -->
                        <xsl:sort select="doctor"/>
                        <!-- Фильтр по номеру кабинета -->
                        <xsl:if test="office_number &lt; 151">
                        <tr>
                            <td>
                                <xsl:value-of select="doctor"/>
                            </td>
                            <td>
                                <xsl:value-of select="speciality"/>
                            </td>
                            <td>
                                <xsl:value-of select="week/Monday"/>
                            </td>
                            <td>
                                <xsl:value-of select="week/Tuesday"/>
                            </td>
                            <td>
                                <xsl:value-of select="week/Wednesday"/>
                            </td>
                            <td>
                                <xsl:value-of select="week/Thursday"/>
                            </td>
                            <td>
                                <xsl:value-of select="week/Friday"/>
                            </td>
                            <td align="center">
                                <xsl:value-of select="office_number"/>
                            </td>
                        </tr>
                        <!-- Конец условия -->
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>