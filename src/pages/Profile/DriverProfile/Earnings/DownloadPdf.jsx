import { Document, PDFDownloadLink, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const DownloadPdf = ({ datas }) => {

    const element = (
        <Document>
            <Page>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCellHeader}>
                            <Text></Text>
                        </View>
                        <View style={styles.tableCellHeader}>
                            <Text>Date</Text>
                        </View>
                        <View style={styles.tableCellHeader}>
                            <Text>Rides</Text>
                        </View>
                        <View style={styles.tableCellHeader}>
                            <Text>Rentals</Text>
                        </View>
                        <View style={styles.tableCellHeader}>
                            <Text>Earnings</Text>
                        </View>
                    </View>
                    {datas?.map((item, i) => (
                        <View key={item._id} style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>{i + 1}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{item.e_date}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{item.e_ride}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{item.e_rental}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{item.e_prize}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Total Ride: {datas?.reduce((prev, next) => prev + parseInt(next.e_ride || 0, 10), 0)}</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Total Rent: {datas?.reduce((prev, next) => prev + parseInt(next.e_rental || 0, 10), 0)}</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Total Earn: {datas?.reduce((prev, next) => prev + parseInt(next.e_prize || 0, 10), 0)}</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );

    return (
        <div>
            <PDFDownloadLink document={element} fileName="table.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>
        </div>
    );
};

const styles = StyleSheet.create({
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 10
    },
    tableRow: {
        flexDirection: 'row'
    },
    tableCellHeader: {
        width: '33.33%',
        backgroundColor: '#CCCCCC',
        padding: 5,
        borderWidth: 1,
        borderColor: '#000000'
    },
    tableCell: {
        width: '33.33%',
        padding: 5,
        borderWidth: 1,
        borderColor: '#000000'
    },
    total: {
        marginTop: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      },
      totalText: {
        fontWeight: 'semibold',
        fontSize: "20px",
        color: 'red'
      }     
});

export { DownloadPdf };
