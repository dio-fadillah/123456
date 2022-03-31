import { BlobProvider, View } from '@react-pdf/renderer';
import React from 'react';
import { Page, Text, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page:{
        backgroundColor: '#ebebeb'
    },
    title:{
        fontSize:'16pt'
    },
    section:{
        margin:4, padding:8, fontSize: '12pt'
    }
});

function pdfText(){
    return(
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={style.section}>
                    <Text style={styles.title}>Test 123445</Text>
                    <View style={styles.section}>
                        <Text>Tak ada yang lebih basah</Text>
                        <Text>dari hujan setelah oktober</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default class PdfRender extends React.Component{
    render(){
        return(
            <div style={{height: '100%'}}>
                <BlobProvider document={pdfText()}>
                    {({url}) => <iframe src={url} style={{width:'100%', height:'100%'}}/>}
                </BlobProvider>
            </div>
        )
    }
}
